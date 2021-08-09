import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('finance_category')
export class FinanceCategoryEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	type: 'expence' | 'income'
}
