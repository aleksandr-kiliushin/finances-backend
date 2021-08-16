import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

// types
import { IUser } from '#interfaces/user'

@Entity('user')
export class UserEntity {
	@PrimaryGeneratedColumn({ type: 'int' })
	id: IUser['id']

	@Column({ type: 'varchar' })
	name: IUser['name']

	@Column({ type: 'varchar' })
	password: IUser['password']
}
