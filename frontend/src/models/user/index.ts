import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { setRedirectPath } from '#models/common'
import { Http } from '#utils/Http'
import { AppThunk } from '#models/store'
import { IUser } from '#interfaces/user'

const initialState: IState = {
  isUserLoggedIn: !!localStorage.authToken,
  userData: {
    id: 0,
    username: '',
  },
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem('authToken')
      state.isUserLoggedIn = false
      state.userData = initialState.userData
    },
    setIsUserLoggedIn: (state, action: PayloadAction<IState['isUserLoggedIn']>) => {
      state.isUserLoggedIn = action.payload
    },
    setCurrentUserData: (state, action: PayloadAction<IState['userData']>) => {
      state.userData = action.payload
    },
  },
})

export const { logOut, setCurrentUserData, setIsUserLoggedIn } = slice.actions
export const userReducer = slice.reducer

// Thunks
export const getCurrentUserData = (): AppThunk => async (dispatch) => {
  const currentUserData = await Http.get({ url: 'api/user/me' })

  delete currentUserData.password

  dispatch(setCurrentUserData(currentUserData))
}

export const logIn =
  ({ password, username }: Pick<IUser, 'password' | 'username'>): AppThunk =>
  async (dispatch) => {
    const { authToken } = await Http.post({
      payload: {
        password,
        username,
      },
      url: 'api/login',
    })

    if (!authToken) return

    localStorage.authToken = authToken

    dispatch(setIsUserLoggedIn(true))

    dispatch(getCurrentUserData())

    dispatch(setRedirectPath('/'))
  }

interface IState {
  isUserLoggedIn: boolean
  userData: Pick<IUser, 'id' | 'username'>
}
