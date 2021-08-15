import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateBarInput {
	@Field(() => Int, { description: 'Example field (placeholder)' })
	exampleField: number
}
