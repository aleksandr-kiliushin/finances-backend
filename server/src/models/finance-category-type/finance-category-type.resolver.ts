import { Resolver } from '@nestjs/graphql'
import { FinanceCategoryTypeDto } from './dto/finance-category-type.dto'

@Resolver(of => FinanceCategoryTypeDto)
export class FinanceCategoryTypeResolver {}
