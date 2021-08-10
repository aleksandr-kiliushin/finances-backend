import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UpdateFinanceRecordInput {
	@Field({ nullable: true })
	amount?: number

	@Field({ nullable: true })
	categoryId?: number

	@Field({ nullable: true })
	date?: string

	@Field()
	id: number

	@Field({ nullable: true })
	isTrashed?: boolean
}
