import { PartialType } from '@nestjs/mapped-types'

import { CreateFinanceCategoryTypeDto } from './create-finance-category-type.dto'

export class UpdateFinanceCategoryTypeDto extends PartialType(CreateFinanceCategoryTypeDto) {}
