import { Injectable, UnauthorizedException } from "@nestjs/common"
import * as jwt from "jsonwebtoken"

import { CanActivate, ExecutionContext } from "@nestjs/common"

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest()

    const authorizationHeader = request.headers.authorization

    if (!authorizationHeader) return false

    const [, token] = authorizationHeader.split(" ")

    try {
      jwt.verify(token, process.env.JWT_SECRET)

      const { id } = jwt.decode(token, { json: true })

      request.userId = id
    } catch (err) {
      throw new UnauthorizedException("Invalid token.")
    }

    return true
  }
}
