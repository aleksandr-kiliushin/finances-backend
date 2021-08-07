import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Record {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	type: 'expence' | 'income'

	@Column()
	amount: number

	@Column()
	category: string

	@Column()
	date: string

	@Column({ default: false })
	is_trashed: boolean
}
