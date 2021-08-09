import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { FinanceCategoryEntity } from '@models/finance-category/entities/finance-category.entity'

// types
import { IFinanceRecord } from '@interfaces/finance'

@Entity('finance_record')
export class FinanceRecordEntity {
	@Column({ type: 'int' })
	amount: IFinanceRecord['amount']

	@ManyToOne(type => FinanceCategoryEntity)
	category: FinanceCategoryEntity

	@Column({ type: 'varchar' })
	date: IFinanceRecord['date']

	@PrimaryGeneratedColumn()
	id: IFinanceRecord['id']

	@Column({ type: 'bool' })
	isTrashed: IFinanceRecord['isTrashed']
}
