import { Controller, Get } from '@nestjs/common'
import { IRecord } from 'src/record/interfaces'
import { RecordService } from './record.service'

@Controller('api/record')
export class RecordController {
	constructor(private recordService: RecordService) {}

	@Get()
	async getAll(): Promise<IRecord[]> {
		return this.recordService.getAll()
	}
}
