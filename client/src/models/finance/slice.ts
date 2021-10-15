import { createSlice } from '@reduxjs/toolkit'

// Types
import { PayloadAction } from '@reduxjs/toolkit'
import { ILoadingStatus } from '#interfaces/common'
import { AppThunk } from '#models/store'
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

// Utils
import { Http } from '#utils/Http'

const initialState: CounterState = {
	categories: {
		items: [],
		status: 'idle',
	},
	records: {
		notTrashed: {
			items: [],
			status: 'idle',
		},
		trashed: {
			items: [],
			status: 'idle',
		},
	},
}

const financeSlice = createSlice({
	name: 'finance',
	initialState,
	reducers: {
		setCategories: (state, action: PayloadAction<IFinanceCategory[]>) => {
			state.categories = {
				items: action.payload,
				status: 'success',
			}
		},
	},
})

export const { setCategories } = financeSlice.actions
export const financeReducer = financeSlice.reducer

export const getCategories = (): AppThunk => async (dispatch, getState) => {
	if (getState().finance.categories.status !== 'idle') return
	const categories = await Http.get({ url: 'api/finance-category' })
	dispatch(setCategories(categories))
}

// Types
interface CounterState {
	categories: {
		items: IFinanceCategory[]
		status: ILoadingStatus
	}
	records: {
		notTrashed: {
			items: IFinanceRecord[]
			status: ILoadingStatus
		}
		trashed: {
			items: IFinanceRecord[]
			status: ILoadingStatus
		}
	}
}
