import { InputType, Field, Int } from '@nestjs/graphql'

// types
import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

@InputType()
export class UpdateFinanceCategoryDto {
	@Field(() => Int)
	id: IFinanceCategory['id']

	@Field(() => Int, { nullable: true })
	typeId?: IFinanceCategoryType['id']

	@Field(() => String, { nullable: true })
	name?: IFinanceCategory['name']
}
