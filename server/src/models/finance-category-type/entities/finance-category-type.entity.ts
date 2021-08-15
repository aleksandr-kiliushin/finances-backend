import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

// types
import { IFinanceCategoryType } from '#interfaces/finance'

@Entity('finance_category_type')
export class FinanceCategoryTypeEntity {
	@PrimaryGeneratedColumn({ type: 'int' })
	id: IFinanceCategoryType['id']

	@Column({ type: 'varchar' })
	name: IFinanceCategoryType['name']
}
