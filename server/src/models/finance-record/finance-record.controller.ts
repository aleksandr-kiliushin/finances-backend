import { Controller, Get } from '@nestjs/common'
import { FinanceRecordService } from './finance-record.service'

@Controller('finance-record')
export class FinanceRecordController {
	constructor(private readonly financeRecordService: FinanceRecordService) {}

	@Get()
	getFinanceRecords() {
		return 'hjhe'
	}
}
