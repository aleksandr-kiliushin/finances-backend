// Types
import { IFinanceRecord } from '#interfaces/finance'
import { IOrdering } from '#interfaces/common'

export class GetFinanceRecordsDto {
	isTrashed?: IFinanceRecord['isTrashed']
	orderingByDate?: IOrdering
	orderingById?: IOrdering
	skip?: number
	take?: number
}
