import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UserEntity } from './entities/user.entity'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { GetUserArgs } from './dto/get-user.args'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>,
	) {}

	getUser(getUserArgs: GetUserArgs): Promise<UserEntity> {
		return this.userRepository.findOneOrFail({ where: getUserArgs })
	}

	getUsers(): Promise<UserEntity[]> {
		return this.userRepository.find()
	}

	createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
		const user = this.userRepository.create(createUserInput) //as Record<string, unknown>

		return this.userRepository.save(user)
	}

	async updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity> {
		const { id, ...rest } = updateUserInput

		const user = await this.getUser({ id })

		const updatedUser = { ...user, ...rest }

		return this.userRepository.save(updatedUser)
	}

	async deleteUser(id: UserEntity['id']): Promise<UserEntity> {
		const user = await this.getUser({ id })

		await this.userRepository.delete(id)

		return user
	}
}
