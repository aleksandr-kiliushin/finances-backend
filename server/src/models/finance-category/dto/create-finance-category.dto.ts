import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateFinanceCategoryDto {
	@Field()
	typeId: number

	@Field()
	name: string
}
