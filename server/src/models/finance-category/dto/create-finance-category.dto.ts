import { InputType, Field, Int } from '@nestjs/graphql'

// types
import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

@InputType()
export class CreateFinanceCategoryDto {
	@Field(() => Int)
	typeId: IFinanceCategoryType['id']

	@Field(() => String)
	name: IFinanceCategory['name']
}
