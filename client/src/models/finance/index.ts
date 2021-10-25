import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Utils
import { Http } from '#utils/Http'

// Types
import { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '#models/store'
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
	chartData: {
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

/** Thunk creators */
export const createRecordTc = createAsyncThunk(
	'finance/createRecordTc',
	async ({
		amount,
		categoryId,
		date,
	}: {
		amount: IFinanceRecord['amount']
		categoryId: IFinanceCategory['id']
		date: IFinanceRecord['date']
	}) =>
		await Http.post({
			payload: { amount, categoryId, date },
			url: 'api/finance-record',
		}),
)

export const createCategoryTc = createAsyncThunk(
	'finance/createCategoryTc',
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

export const deleteCategoryTc = createAsyncThunk(
	'finance/deleteCategoryTc',
	async ({ categoryId }: { categoryId: IFinanceCategory['id'] }) => {
		const { id } = await Http.delete({ url: `api/finance-category/${categoryId}` })
		return id
	},
)

export const deleteRecordTc = createAsyncThunk(
	'finance/deleteRecordTc',
	async ({ id, isTrashed }: IFinanceRecord) => {
		const record = isTrashed
			? await Http.delete({ url: `api/finance-record/${id}` })
			: await Http.patch({
					payload: { isTrashed: true },
					url: `api/finance-record/${id}`,
			  })

		return { isPermanentDeletion: isTrashed, record }
	},
)

export const getCategoriesTc = createAsyncThunk<IFinanceCategory[], void, { state: RootState }>(
	'finance/getCategoriesTc',
	async (_, { getState }) => {
		if (getState().finance.categories.status !== 'idle') return []

		return await Http.get({ url: 'api/finance-category' })
	},
)

export const getCategoryTypesTc = createAsyncThunk<
	IFinanceCategoryType[],
	void,
	{ state: RootState }
>('finance/getCategoryTypesTc', async (_, { getState }) => {
	if (getState().finance.categoryTypes.status !== 'idle') return []

	return await Http.get({ url: 'api/finance-category-type' })
})

export const getChartDataTc = createAsyncThunk<IFinanceRecord[], void, { state: RootState }>(
	'finance/getChartDataTc',
	async (_, { getState }) => {
		if (getState().finance.chartData.status !== 'idle') return []

		return await Http.get({
			url: 'api/finance-record?isTrashed=false&orderingByDate=ASC&orderingById=ASC',
		})
	},
)

export const getRecordsTc = createAsyncThunk<void, { isTrash: boolean }, { state: RootState }>(
	'finance/getRecordsTc',
	async ({ isTrash }, { getState, dispatch }) => {
		const existingRecords = getState().finance.records[isTrash ? 'trashed' : 'notTrashed']

		if (['completed', 'loading'].includes(existingRecords.status)) return

		dispatch(setRecordsStatus({ isTrash, status: 'loading' }))

		const records = await Http.get({
			url: `api/finance-record?isTrashed=${isTrash}&orderingByDate=DESC&orderingById=DESC&skip=${existingRecords.items.length}&take=50`,
		})

		dispatch(addRecordsItems({ isTrash, items: records }))

		dispatch(
			setRecordsStatus({
				isTrash,
				status: records.length === 0 ? 'completed' : 'success',
			}),
		)
	},
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

		restoreRecord: (state, action: PayloadAction<IFinanceRecord>) => {
			state.records.trashed.items = state.records.trashed.items.filter(
				(record) => record.id !== action.payload.id,
			)

			state.records.notTrashed.items.unshift(action.payload)
		},

		setRecordsStatus: (
			state,
			action: PayloadAction<{ isTrash: boolean; status: ILoadingStatus }>,
		) => {
			const { isTrash, status } = action.payload

			state.records[isTrash ? 'trashed' : 'notTrashed'].status = status
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

		builder.addCase(
			deleteCategoryTc.fulfilled,
			(state, action: PayloadAction<IFinanceCategory['id']>) => {
				state.categories.items = state.categories.items.filter(
					(category) => category.id !== action.payload,
				)
			},
		)

		builder.addCase(
			deleteRecordTc.fulfilled,
			(
				state,
				action: PayloadAction<{
					isPermanentDeletion: boolean
					record: IFinanceRecord
				}>,
			) => {
				const { isPermanentDeletion, record } = action.payload
				const { id } = record

				const recordsArrayType = isPermanentDeletion ? 'trashed' : 'notTrashed'

				state.records[recordsArrayType].items = state.records[recordsArrayType].items.filter(
					(record) => record.id !== id,
				)

				if (isPermanentDeletion) return

				state.records.trashed.items.unshift(record)
			},
		)

		builder.addCase(
			getCategoriesTc.fulfilled,
			(state, action: PayloadAction<IFinanceCategory[]>) => {
				if (action.payload.length === 0) return

				state.categories = { items: action.payload, status: 'success' }
			},
		)

		builder.addCase(
			getCategoryTypesTc.fulfilled,
			(state, action: PayloadAction<IFinanceCategoryType[]>) => {
				if (action.payload.length === 0) return

				state.categoryTypes = { items: action.payload, status: 'success' }
			},
		)

		builder.addCase(getChartDataTc.fulfilled, (state, action: PayloadAction<IFinanceRecord[]>) => {
			if (action.payload.length === 0) return

			state.chartData = { items: action.payload, status: 'success' }
		})
	},
})

export const { addRecordsItems, restoreRecord, setRecordsStatus, updateCategory, updateRecord } =
	slice.actions
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
	chartData: {
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
