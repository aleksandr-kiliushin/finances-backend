import { Resolver, Mutation, Args } from '@nestjs/graphql'

import { AuthService } from './auth.service'
import { LoginInput } from './dto/login.input'
import { UserDto } from '#models/user/dto/user.dto'

@Resolver(() => UserDto) // change with somehting
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation(() => String)
	async login(
		@Args('loginInput')
		loginInput: LoginInput,
	) {
		return this.authService.createToken(loginInput)
	}
}
