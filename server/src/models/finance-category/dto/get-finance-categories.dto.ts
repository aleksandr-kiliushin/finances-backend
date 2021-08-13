import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class GetFinanceCategoriesDto {
	@Field(() => [Int], { nullable: true })
	ids?: number[]
}
