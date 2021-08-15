import { IFinanceCategoryType } from '#interfaces/finance'
import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class UpdateFinanceCategoryTypeDto {
	@Field(() => Int)
	id: IFinanceCategoryType['id']

	@Field(() => String, { nullable: true })
	name?: IFinanceCategoryType['name']
}
