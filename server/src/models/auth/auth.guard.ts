import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import * as path from 'path'
import * as dotenv from 'dotenv'

dotenv.config({ path: path.join(__dirname, '..', '..', '..', '..', 'config', 'prod.env') })

@Injectable()
export class AuthGuard implements CanActivate {
	canActivate(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest()

		const authorizationHeader = request.headers.authorization

		if (!authorizationHeader) return false

		const [, token] = authorizationHeader.split(' ')

		try {
			jwt.verify(token, process.env.JWT_SECRET)
		} catch (err) {
			throw new UnauthorizedException('Invalid token.')
		}

		return true
	}
}
