import { createSlice } from '@reduxjs/toolkit'

// Types
import { PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '#models/store'
import { ILoadingStatus } from '#interfaces/common'
import { IFinanceCategory, IFinanceCategoryType, IFinanceRecord } from '#interfaces/finance'

// Utils
import { Http } from '#utils/Http'

const initialState: IState = {
	categories: {
		items: [],
		status: 'idle',
	},
	categoryTypes: {
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

const slice = createSlice({
	name: 'finance',
	initialState,
	reducers: {
		createCategory: (state, action: PayloadAction<IFinanceCategory>) => {
			state.categories.items.unshift(action.payload)
		},

		createRecord: (state, action: PayloadAction<IFinanceRecord>) => {
			state.records.notTrashed.items.unshift(action.payload)
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
			state.records.notTrashed.items = state.records.notTrashed.items.filter(
				(record) => record.id !== action.payload.record.id,
			)

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

		setNotTrashedRecords: (state, action: PayloadAction<IFinanceRecord[]>) => {
			state.records.notTrashed = {
				items: action.payload,
				status: 'success',
			}
		},

		setTrashedRecords: (state, action: PayloadAction<IFinanceRecord[]>) => {
			state.records.trashed = {
				items: action.payload,
				status: 'success',
			}
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
})

export const {
	createCategory,
	createRecord,
	deleteCategory,
	deleteRecord,
	restoreRecord,
	setCategories,
	setCategoryTypes,
	setNotTrashedRecords,
	setTrashedRecords,
	updateCategory,
	updateRecord,
} = slice.actions
export const financeReducer = slice.reducer

// Thunks
// To do: put thunk-creators to a separate file
export const createCategoryTc =
	({
		name,
		typeId,
	}: {
		name: IFinanceCategory['name']
		typeId: IFinanceCategoryType['id']
	}): AppThunk =>
	async (dispatch) => {
		const category = await Http.post({
			payload: {
				name,
				typeId,
			},
			url: 'api/finance-category',
		})

		dispatch(createCategory(category))
	}

export const createRecordTc =
	({
		amount,
		categoryId,
		date,
	}: {
		amount: IFinanceRecord['amount']
		categoryId: IFinanceCategory['id']
		date: IFinanceRecord['date']
	}): AppThunk =>
	async (dispatch) => {
		const record = await Http.post({
			payload: {
				amount,
				categoryId,
				date,
			},
			url: 'api/finance-record',
		})

		dispatch(createRecord(record))
	}

export const deleteCategoryTc =
	({ categoryId }: { categoryId: IFinanceCategory['id'] }): AppThunk =>
	async (dispatch) => {
		const { id } = await Http.delete({
			url: 'api/finance-category/' + categoryId,
		})

		dispatch(deleteCategory(id))
	}

export const deleteRecordTc =
	({
		isTrashed,
		recordId,
	}: {
		isTrashed: IFinanceRecord['isTrashed']
		recordId: IFinanceRecord['id']
	}): AppThunk =>
	async (dispatch) => {
		let record

		if (isTrashed) {
			record = await Http.delete({
				url: 'api/finance-record/' + recordId,
			})
		} else {
			record = await Http.patch({
				payload: { isTrashed: true },
				url: 'api/finance-record/' + recordId,
			})
		}

		dispatch(deleteRecord({ permanently: isTrashed, record }))
	}

export const getCategories = (): AppThunk => async (dispatch, getState) => {
	if (getState().finance.categories.status !== 'idle') return
	const categories = await Http.get({ url: 'api/finance-category' })
	dispatch(setCategories(categories))
}

export const getCategoryTypes = (): AppThunk => async (dispatch, getState) => {
	if (getState().finance.categoryTypes.status !== 'idle') return
	const categoryTypes = await Http.get({ url: 'api/finance-category-type' })
	dispatch(setCategoryTypes(categoryTypes))
}

export const getRecords = (): AppThunk => async (dispatch, getState) => {
	if (getState().finance.records.notTrashed.status === 'idle') {
		const records = await Http.get({
			url: 'api/finance-record?isTrashed=false&orderingByDate=DESC&orderingById=DESC',
		})
		dispatch(setNotTrashedRecords(records))
	}

	if (getState().finance.records.trashed.status === 'idle') {
		const records = await Http.get({
			url: 'api/finance-record?isTrashed=true&orderingByDate=DESC&orderingById=DESC',
		})
		dispatch(setTrashedRecords(records))
	}
}

export const restoreRecordTc =
	(recordId: IFinanceRecord['id']): AppThunk =>
	async (dispatch) => {
		const record = await Http.patch({
			payload: { isTrashed: false },
			url: 'api/finance-record/' + recordId,
		})

		dispatch(restoreRecord(record))
	}

export const updateCategoryTc =
	({
		categoryId,
		name,
		typeId,
	}: {
		categoryId: IFinanceCategory['id']
		name: IFinanceCategory['name']
		typeId: IFinanceCategoryType['id']
	}): AppThunk =>
	async (dispatch) => {
		const category = await Http.patch({
			payload: {
				name,
				typeId,
			},
			url: 'api/finance-category/' + categoryId,
		})

		dispatch(updateCategory(category))
	}

export const updateRecordTc =
	({
		amount,
		categoryId,
		date,
		id,
	}: {
		amount: IFinanceRecord['amount']
		categoryId: IFinanceCategory['id']
		date: IFinanceRecord['date']
		id: IFinanceRecord['id']
	}): AppThunk =>
	async (dispatch) => {
		const record = await Http.patch({
			payload: {
				amount,
				categoryId,
				date,
			},
			url: 'api/finance-record/' + id,
		})

		dispatch(updateRecord(record))
	}

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
