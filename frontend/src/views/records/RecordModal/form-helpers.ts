import { IFinanceRecord } from '#interfaces/finance'

export enum FormField {
  Amount = 'amount',
  CategoryId = 'categoryId',
  Date = 'date',
}

export interface FormValues {
  [FormField.Amount]: IFinanceRecord['amount']
  [FormField.CategoryId]: string
  [FormField.Date]: IFinanceRecord['date']
}
