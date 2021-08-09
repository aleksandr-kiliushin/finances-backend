import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { FinanceCategory } from '@models/finance-category/entities/finance-category.entity'

@Entity()
export class FinanceRecord {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	amount: number

	@ManyToOne(type => FinanceCategory)
	category: FinanceCategory

	@Column()
	date: string

	@Column({ default: false })
	isTrashed: boolean
}
