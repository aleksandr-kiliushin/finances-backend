import { Field, Int, ObjectType } from '@nestjs/graphql'

// types
import { IUser } from '#interfaces/user'

@ObjectType()
export class UserDto {
	@Field(() => Int)
	id: IUser['id']

	@Field(() => String)
	name: IUser['name']

	@Field(() => String)
	password: IUser['password']
}
