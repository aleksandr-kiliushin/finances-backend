import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm'
import { Category } from 'src/record/category.entity'

@Entity()
export class Record {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	amount: number

	@ManyToOne(type => Category)
	category: Category

	@Column()
	date: string

	@Column({ default: false })
	isTrashed: boolean
}
