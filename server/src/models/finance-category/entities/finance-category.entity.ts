import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

// types
import { IFinanceCategory } from '@interfaces/finance'

@Entity('finance_category')
export class FinanceCategoryEntity {
	@PrimaryGeneratedColumn()
	id: IFinanceCategory['id']

	@Column({ type: 'varchar' })
	name: IFinanceCategory['name']

	@Column({ type: 'varchar' })
	type: IFinanceCategory['type']
}
