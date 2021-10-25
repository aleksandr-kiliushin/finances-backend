import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Utils
import { Http } from '#utils/Http'

// Types
import { PayloadAction } from '@reduxjs/toolkit'
import { ILoadingStatus } from '#interfaces/common'
import { IFinanceCategory, IFinanceCategoryType, IFinanceRecord } from '#interfaces/finance'

const initialState: IState = {
	categories: {
		items: [],
		status: 'idle',
	},
	categoryTypes: {
		items: [],
		status: 'idle',
	},
	chartRecords: {
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

/** Thunks */
export const createRecordTc = createAsyncThunk(
	'finance/createRecord',
	async ({
		amount,
		categoryId,
		date,
	}: {
		amount: IFinanceRecord['amount']
		categoryId: IFinanceCategory['id']
		date: IFinanceRecord['date']
	}) => {
		return await Http.post({
			payload: { amount, categoryId, date },
			url: 'api/finance-record',
		})
	},
)

export const createCategoryTc = createAsyncThunk(
	'finance/createCategory',
	async ({
		name,
		typeId,
	}: {
		name: IFinanceCategory['name']
		typeId: IFinanceCategoryType['id']
	}) =>
		await Http.post({
			payload: { name, typeId },
			url: 'api/finance-category',
		}),
)

const slice = createSlice({
	name: 'finance',
	initialState,
	reducers: {
		addRecordsItems: (
			state,
			action: PayloadAction<{
				isTrash: boolean
				items: IFinanceRecord[]
			}>,
		) => {
			const { isTrash, items } = action.payload

			state.records[isTrash ? 'trashed' : 'notTrashed'].items.push(...items)
		},

		deleteCategory: (state, action: PayloadAction<IFinanceCategory['id']>) => {
			state.categories.items = state.categories.items.filter(
				(category) => category.id !== action.payload,
			)
		},

		deleteRecord: (
			state,
			action: PayloadAction<{ permanently: boolean; record: IFinanceRecord }>,
		) => {
			state.records[action.payload.permanently ? 'trashed' : 'notTrashed'].items = state.records[
				action.payload.permanently ? 'trashed' : 'notTrashed'
			].items.filter((record) => record.id !== action.payload.record.id)

			if (action.payload.permanently) return

			state.records.trashed.items.unshift(action.payload.record)
		},

		restoreRecord: (state, action: PayloadAction<IFinanceRecord>) => {
			state.records.trashed.items = state.records.trashed.items.filter(
				(record) => record.id !== action.payload.id,
			)

			state.records.notTrashed.items.unshift(action.payload)
		},

		setCategories: (state, action: PayloadAction<IFinanceCategory[]>) => {
			state.categories = {
				items: action.payload,
				status: 'success',
			}
		},

		setChartRecords: (state, action: PayloadAction<IFinanceRecord[]>) => {
			state.chartRecords = {
				items: action.payload,
				status: 'success',
			}
		},

		setRecordsStatus: (
			state,
			action: PayloadAction<{ isTrash: boolean; status: ILoadingStatus }>,
		) => {
			const { isTrash, status } = action.payload

			state.records[isTrash ? 'trashed' : 'notTrashed'].status = status
		},

		setCategoryTypes: (state, action: PayloadAction<IFinanceCategoryType[]>) => {
			state.categoryTypes = {
				items: action.payload,
				status: 'success',
			}
		},

		updateCategory: (state, action: PayloadAction<IFinanceCategory>) => {
			const categoryIndex = state.categories.items.findIndex(
				(category) => category.id === action.payload.id,
			)

			state.categories.items[categoryIndex] = action.payload
		},

		updateRecord: (state, action: PayloadAction<IFinanceRecord>) => {
			const recordIndex = state.records.notTrashed.items.findIndex(
				(record) => record.id === action.payload.id,
			)

			state.records.notTrashed.items[recordIndex] = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			createCategoryTc.fulfilled,
			(state, action: PayloadAction<IFinanceCategory>) => {
				state.categories.items.unshift(action.payload)
			},
		)

		builder.addCase(createRecordTc.fulfilled, (state, action: PayloadAction<IFinanceRecord>) => {
			state.records.notTrashed.items.unshift(action.payload)
		})
	},
})

export const {
	addRecordsItems,
	deleteCategory,
	deleteRecord,
	restoreRecord,
	setCategories,
	setCategoryTypes,
	setChartRecords,
	setRecordsStatus,
	updateCategory,
	updateRecord,
} = slice.actions
export const financeReducer = slice.reducer

// Types
interface IState {
	categories: {
		items: IFinanceCategory[]
		status: ILoadingStatus
	}
	categoryTypes: {
		items: IFinanceCategoryType[]
		status: ILoadingStatus
	}
	chartRecords: {
		items: IFinanceRecord[]
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
