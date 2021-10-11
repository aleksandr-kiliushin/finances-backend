import { InputType, Field } from '@nestjs/graphql'

// Types
import { IFinanceCategoryType } from '#interfaces/finance'

@InputType()
export class CreateFinanceCategoryTypeInput {
	@Field(() => String)
	name: IFinanceCategoryType['name']
}
