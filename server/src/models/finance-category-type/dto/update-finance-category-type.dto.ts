// import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
// import { CreateFinanceCategoryTypeDto } from './create-finance-category-type.dto'
// // types
// import { IFinanceCategoryType } from '#interfaces/finance'
// @InputType()
// export class UpdateFinanceCategoryTypeDto extends PartialType(CreateFinanceCategoryTypeDto) {
// 	@Field(() => ID)
// 	id: IFinanceCategoryType['id']
// }

import { IFinanceCategoryType } from '#interfaces/finance'
import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { CreateFinanceCategoryTypeDto } from './create-finance-category-type.dto'

@InputType()
export class UpdateFinanceCategoryTypeDto extends PartialType(CreateFinanceCategoryTypeDto) {
	@Field(() => ID)
	id: IFinanceCategoryType['id']
}
