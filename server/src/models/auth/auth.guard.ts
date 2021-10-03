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

		const result = this.validateToken(authorizationHeader) // Set current user to context.

		console.log(result)

		return true

		// const ctx = GqlExecutionContext.create(context).getContext()
		// if (!ctx.headers.authorization) return false
		// ctx.user = this.validateToken(ctx.headers.authorization) // change to userId
		// return true
	}

	validateToken(authorizationHeader: string) {
		const [, token] = authorizationHeader.split(' ')

		try {
			return jwt.verify(token, 'process.env.JWT_SECRET', { algorithms: ['HS384'] })
		} catch (err) {
			console.log(err)
			throw new UnauthorizedException('Invalid token.')
		}
	}
}
