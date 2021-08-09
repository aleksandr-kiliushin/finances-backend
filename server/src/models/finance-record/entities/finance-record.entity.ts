import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { FinanceCategoryEntity } from '@models/finance-category/entities/finance-category.entity'

@Entity('finance_record')
export class FinanceRecordEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	amount: number

	@ManyToOne(type => FinanceCategoryEntity)
	category: FinanceCategoryEntity

	@Column()
	date: string

	@Column({ default: false })
	isTrashed: boolean
}
