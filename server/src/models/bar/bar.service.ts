import { Injectable } from '@nestjs/common'
import { CreateBarInput } from './dto/create-bar.input'
import { UpdateBarInput } from './dto/update-bar.input'

@Injectable()
export class BarService {
	create(createBarInput: CreateBarInput) {
		return 'This action adds a new bar'
	}

	findAll() {
		return `This action returns all bar`
	}

	findOne(id: number) {
		return `This action returns a #${id} bar`
	}

	update(id: number, updateBarInput: UpdateBarInput) {
		return `This action updates a #${id} bar`
	}

	remove(id: number) {
		return `This action removes a #${id} bar`
	}
}
