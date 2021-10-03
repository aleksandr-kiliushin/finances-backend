import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
// import * as bcrypt from 'bcrypt'

import { UserEntity } from './entities/user.entity'
// import { CreateUserDto } from './dto/create-user.dto'
import { GetUserDto } from './dto/get-user.dto'
// import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>,
	) {}

	async getUser(query: GetUserDto): Promise<UserEntity | UserEntity[]> {
		const { id, username } = query

		if (id === undefined && username === undefined) return this.userRepository.find()

		const user = await this.userRepository.findOne({ where: query })

		if (!user) throw new NotFoundException('User not found.')

		return user
	}

	// async createUser(createUserInput: CreateUserDto): Promise<UserEntity> {
	// 	const { password, username } = createUserInput

	// 	const salt = await bcrypt.genSalt()
	// 	const hashedPassword = await bcrypt.hash(password, salt)

	// 	const user = this.userRepository.create({
	// 		password: hashedPassword,
	// 		username,
	// 	})

	// 	return this.userRepository.save(user)
	// }

	// async updateUser(id: UserEntity['id'], updateUserDto: UpdateUserDto): Promise<UserEntity> {
	// 	const { password, username } = updateUserDto

	// 	const user = (await this.getUser({ id })) as UserEntity

	// 	if (username) {
	// 		user.username = username
	// 	}

	// 	if (password) {
	// 		const salt = await bcrypt.genSalt()
	// 		user.password = await bcrypt.hash(password, salt)
	// 	}

	// 	return this.userRepository.save(user)
	// }

	// async deleteUser(id: UserEntity['id']): Promise<UserEntity> {
	// 	const user = (await this.getUser({ id })) as UserEntity

	// 	await this.userRepository.delete(id)

	// 	return user
	// }
}
