import { InputType, Field, Int } from '@nestjs/graphql'

// types
import { IFinanceCategory } from '#interfaces/finance'

@InputType()
export class GetFinanceCategoriesDto {
	@Field(() => [Int], { nullable: true })
	ids?: IFinanceCategory['id'][]
}
