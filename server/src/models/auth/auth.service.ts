import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import * as path from 'path'
import * as dotenv from 'dotenv'

import { UserService } from '#models/user/user.service'
import { UserEntity } from '#models/user/entities/user.entity'
import { LoginDto } from './dto/login.dto'

dotenv.config({ path: path.join(__dirname, '..', '..', '..', '..', 'config', 'prod.env') })

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService) {}

	async createToken(loginDto: LoginDto): Promise<{ authToken: string }> {
		const { password, username } = loginDto

		const user = (await this.userService.getUser({ username })) as UserEntity

		if (!user) throw new UnauthorizedException()

		const isPasswordValid = await bcrypt.compare(password, user.password)

		if (!isPasswordValid) throw new UnauthorizedException()

		return {
			authToken: jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
				expiresIn: '10d',
			}),
		}
	}
}
