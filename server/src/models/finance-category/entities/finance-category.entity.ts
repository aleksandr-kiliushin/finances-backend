import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class FinanceCategory {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	type: 'expence' | 'income'
}
