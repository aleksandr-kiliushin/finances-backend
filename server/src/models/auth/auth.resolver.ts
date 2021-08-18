import { Resolver, Mutation, Args } from '@nestjs/graphql'

import { AuthService } from './auth.service'
import { LoginInput } from './dto/login.input'
import { LoginDto } from './dto/login.dto'

@Resolver(() => LoginDto) // change with somehting
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation(() => LoginDto)
	async login(
		@Args('loginInput')
		loginInput: LoginInput,
	) {
		return this.authService.createToken(loginInput)
	}
}
