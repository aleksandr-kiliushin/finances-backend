import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class GetFinanceRecordsDto {
	@Field({ nullable: true })
	isTrashed?: boolean
}
