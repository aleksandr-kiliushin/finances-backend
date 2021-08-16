import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'

import { UserService } from './user.service'
import { UserDto } from './dto/user.dto'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'

@Resolver(() => UserDto)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => UserDto, { name: 'user' })
	getUser(
		@Args('id', { type: () => Int })
		id: UserDto['id'],
	) {
		return this.userService.getUser(id)
	}

	@Query(() => [UserDto], { name: 'users' })
	getUsers() {
		return this.userService.getUsers()
	}

	@Mutation(() => UserDto)
	createUser(
		@Args('createUserInput')
		createUserInput: CreateUserInput,
	) {
		return this.userService.createUser(createUserInput)
	}

	@Mutation(() => UserDto)
	updateUser(
		@Args('updateUserInput')
		updateUserInput: UpdateUserInput,
	) {
		return this.userService.updateUser(updateUserInput)
	}

	@Mutation(() => UserDto)
	deleteUser(
		@Args('id', { type: () => Int })
		id: UserDto['id'],
	) {
		return this.userService.deleteUser(id)
	}
}
