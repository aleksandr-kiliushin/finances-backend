import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import * as bcrypt from 'bcrypt'

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
		const user = this.userRepository.findOne({ where: getUserArgs })

		if (!user) throw new NotFoundException('User not found.')

		return user
	}

	getUsers(): Promise<UserEntity[]> {
		return this.userRepository.find()
	}

	async createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
		const { password, username } = createUserInput

		const salt = await bcrypt.genSalt()
		const hashedPassword = await bcrypt.hash(password, salt)

		console.log(salt)
		console.log(hashedPassword)

		const user = this.userRepository.create({
			password: hashedPassword,
			username,
		})

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
