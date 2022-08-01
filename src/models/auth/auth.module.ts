import { Module } from "@nestjs/common"

import { AuthController } from "./auth.controller"
import { AuthService } from "./auth.service"
import { UserModule } from "#models/user/user.module"

@Module({
  imports: [UserModule],
  providers: [AuthController, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
