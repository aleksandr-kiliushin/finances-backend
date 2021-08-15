import { InputType, Field, ID } from '@nestjs/graphql'

// types
import { IFinanceCategory } from '#interfaces/finance'

@InputType()
export class GetFinanceCategoriesDto {
	@Field(() => [ID], { nullable: true })
	ids?: IFinanceCategory['id'][]
}
