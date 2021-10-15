import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { financeReducer } from './finance/slice'

export const store = configureStore({
	reducer: {
		finance: financeReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
