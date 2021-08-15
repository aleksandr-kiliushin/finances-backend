import { CreateBarInput } from './create-bar.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateBarInput extends PartialType(CreateBarInput) {
	@Field(() => Int)
	id: number
}
