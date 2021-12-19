import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

export class CreateFinanceCategoryDto {
  name: IFinanceCategory['name']
  typeId: IFinanceCategoryType['id']
}
