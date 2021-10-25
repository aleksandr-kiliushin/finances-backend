// Models
import { updateRecord } from '#models/finance'

// Utils
import { Http } from '#utils/Http'

// Types
import { AppThunk } from '#models/store'
import { IFinanceCategory, IFinanceCategoryType, IFinanceRecord } from '#interfaces/finance'

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
