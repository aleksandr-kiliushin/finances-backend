import { Field, ID, ObjectType } from '@nestjs/graphql'

// types
import { IFinanceCategoryType } from '#interfaces/finance'

@ObjectType()
export class FinanceCategoryTypeDto {
	@Field(() => ID)
	id: IFinanceCategoryType['id']

	@Field(() => String)
	name: IFinanceCategoryType['name']
}
