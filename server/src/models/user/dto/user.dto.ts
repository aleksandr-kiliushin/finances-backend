import { Field, Int, ObjectType } from '@nestjs/graphql'

// Types
import { IUser } from '#interfaces/user'

@ObjectType()
export class UserDto {
	@Field(() => Int)
	id: IUser['id']

	@Field(() => String)
	username: IUser['username']

	@Field(() => String)
	password: IUser['password']
}
