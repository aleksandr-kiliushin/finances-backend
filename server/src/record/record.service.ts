import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Record } from 'src/record/record.entity'
import { IRecord } from 'src/record/interfaces'

@Injectable()
export class RecordService {
	constructor(@InjectRepository(Record) private recordRepository: Repository<Record>) {}

	getAll(): Promise<IRecord[]> {
		return this.recordRepository.find({
			order: {
				date: 'DESC',
			},
		})
	}
}
