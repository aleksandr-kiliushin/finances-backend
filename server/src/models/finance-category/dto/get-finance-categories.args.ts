import { InputType, Field, ID } from '@nestjs/graphql'

// types
import { IFinanceCategory } from '#interfaces/finance'

@InputType()
export class GetFinanceCategoriesArgs {
	@Field(() => [ID], { nullable: true })
	ids?: IFinanceCategory['id'][]
}
