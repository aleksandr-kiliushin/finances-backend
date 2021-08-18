import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthGuard implements CanActivate {
	canActivate(context: ExecutionContext) {
		const ctx = GqlExecutionContext.create(context).getContext()

		if (!ctx.headers.authorization) return false

		ctx.user = this.validateToken(ctx.headers.authorization) // change to userId

		return true
	}

	validateToken(auth: string) {
		const [, token] = auth.split(' ')

		try {
			return jwt.verify(token, 'secret')
		} catch (err) {
			throw new UnauthorizedException('Invalid token.')
		}
	}
}
