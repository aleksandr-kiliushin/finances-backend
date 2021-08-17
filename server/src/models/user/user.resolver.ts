import { Resolver, Query, Mutation, Args, Int /*, Context*/ } from '@nestjs/graphql'

import { UserService } from './user.service'
import { UserDto } from './dto/user.dto'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { GetUserArgs } from './dto/get-user.args'
// import { UseGuards } from '@nestjs/common'
// import { AuthGuard } from '#models/auth/auth.guard'
// import { IUser } from '#interfaces/user'

@Resolver(() => UserDto)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => UserDto, { name: 'user' })
	getUser(
		@Args('getUserArgs')
		getUserArgs: GetUserArgs,
	) {
		return this.userService.getUser(getUserArgs)
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

	// @Query(() => UserDto)
	// @UseGuards(new AuthGuard())
	// me(
	// 	@Context('user')
	// 	{ id }: IUser,
	// ) {
	// 	return this.userService.getUser({ id })
	// }
}
