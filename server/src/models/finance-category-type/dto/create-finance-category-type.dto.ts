import { InputType, Field } from '@nestjs/graphql'

// types
import { IFinanceCategoryType } from '#interfaces/finance'

@InputType()
export class CreateFinanceCategoryTypeDto {
	@Field(() => String)
	name: IFinanceCategoryType['name']
}
