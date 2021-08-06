import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Record {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	type: 'income' | 'outcome'

	@Column()
	amount: number

	@Column()
	date: string

	@Column({ default: false })
	isTrashed: boolean
}
