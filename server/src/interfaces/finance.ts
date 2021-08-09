export interface IFinanceCategory {
	id: number
	name: string
	type: 'expense' | 'income'
}

export interface IFinanceRecord {
	amount: number
	category: IFinanceCategory
	date: string
	id: number
	isTrashed: boolean
}
