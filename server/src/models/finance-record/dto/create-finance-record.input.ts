import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateFinanceRecordInput {
	@Field()
	amount: number

	@Field()
	categoryId: number

	@Field()
	date: string
}
