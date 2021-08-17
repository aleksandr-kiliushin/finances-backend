import { InputType, Field } from '@nestjs/graphql'

// type
import { IUser } from '#interfaces/user'

@InputType()
export class CreateUserInput {
	@Field(() => String)
	username: IUser['username']

	@Field(() => String)
	password: IUser['password']
}
