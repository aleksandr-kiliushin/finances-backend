import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UpdateFinanceCategoryDto {
	@Field()
	id: number

	@Field({ nullable: true })
	typeId?: number

	@Field({ nullable: true })
	name?: string
}
