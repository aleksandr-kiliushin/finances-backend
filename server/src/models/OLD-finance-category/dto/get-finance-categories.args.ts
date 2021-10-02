import { InputType, Field, Int } from '@nestjs/graphql'

// types
import { IFinanceCategory } from '#interfaces/finance'

@InputType()
export class GetFinanceCategoriesArgs {
	@Field(() => [Int], { nullable: true })
	ids?: IFinanceCategory['id'][]
}
