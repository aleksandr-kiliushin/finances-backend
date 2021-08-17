import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'

import { UserService } from '#models/user/user.service'
import { LoginInput } from './dto/login.input'

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService) {}

	async createToken(loginInput: LoginInput) {
		const { password, username } = loginInput

		const user = await this.userService.getUser({ username })

		if (!user) throw new UnauthorizedException()
		if (user.password !== password) throw new UnauthorizedException()

		return jwt.sign({ id: user.id, password }, 'secret')
	}
}
