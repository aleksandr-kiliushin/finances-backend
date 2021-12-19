// Types
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

export class CreateFinanceRecordDto {
	amount: IFinanceRecord['amount']
	categoryId: IFinanceCategory['id']
	date: IFinanceRecord['date']
}
