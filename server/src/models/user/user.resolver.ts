import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { AuthGuard } from '#models/auth/auth.guard'
import { UserService } from './user.service'
import { UserDto } from './dto/user.dto'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { GetUserArgs } from './dto/get-user.args'

@Resolver(() => UserDto)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@UseGuards(new AuthGuard())
	@Query(() => UserDto, { name: 'user' })
	getUser(
		@Args('getUserArgs')
		getUserArgs: GetUserArgs,
	) {
		return this.userService.getUser(getUserArgs)
	}

	@UseGuards(new AuthGuard())
	@Query(() => [UserDto], { name: 'users' })
	getUsers() {
		return this.userService.getUsers()
	}

	@UseGuards(new AuthGuard())
	@Mutation(() => UserDto)
	createUser(
		@Args('createUserInput')
		createUserInput: CreateUserInput,
	) {
		return this.userService.createUser(createUserInput)
	}

	@UseGuards(new AuthGuard())
	@Mutation(() => UserDto)
	updateUser(
		@Args('updateUserInput')
		updateUserInput: UpdateUserInput,
	) {
		return this.userService.updateUser(updateUserInput)
	}

	@UseGuards(new AuthGuard())
	@Mutation(() => UserDto)
	deleteUser(
		@Args('id', { type: () => Int })
		id: UserDto['id'],
	) {
		return this.userService.deleteUser(id)
	}

	@UseGuards(new AuthGuard())
	@Query(() => UserDto, { name: 'currentUserData' })
	getCurrentUserData(
		@Context('user')
		{ id }: UserDto,
	) {
		return this.userService.getUser({ id })
	}
}
