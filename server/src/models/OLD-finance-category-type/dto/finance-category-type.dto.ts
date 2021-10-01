import { Field, Int, ObjectType } from '@nestjs/graphql'

// types
import { IFinanceCategoryType } from '#interfaces/finance'

@ObjectType()
export class FinanceCategoryTypeDto {
	@Field(() => Int)
	id: IFinanceCategoryType['id']

	@Field(() => String)
	name: IFinanceCategoryType['name']
}
