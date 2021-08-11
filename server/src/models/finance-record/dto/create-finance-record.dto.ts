import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateFinanceRecordDto {
	@Field()
	amount: number

	@Field()
	categoryId: number

	@Field()
	date: string
}
