export interface IRecord {
	amount: number
	id: number
	type: 'expence' | 'income'
	category: string
	date: string
	is_trashed: boolean
}
