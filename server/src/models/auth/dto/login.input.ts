import { IUser } from '#interfaces/user'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class LoginInput {
	@Field(() => String)
	username: IUser['username']

	@Field(() => String)
	password: IUser['password']
}
