import { InputType, Field, Int } from '@nestjs/graphql'

// types
import { IUser } from '#interfaces/user'

@InputType()
export class GetUserArgs {
	@Field(() => Int, { nullable: true })
	id?: IUser['id']

	@Field(() => String, { nullable: true })
	username?: IUser['username']
}
