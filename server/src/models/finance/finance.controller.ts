import { Controller, Get } from '@nestjs/common'
import { IRecord } from '@interfaces/record'
import { FinanceService } from '@models/finance/finance.service'

@Controller('api/record')
export class FinanceController {
	constructor(private recordService: FinanceService) {}

	@Get()
	async getAll(): Promise<IRecord[]> {
		return this.recordService.getAll()
	}
}
