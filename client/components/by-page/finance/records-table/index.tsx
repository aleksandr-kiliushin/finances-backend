import React from 'react'

// components
import { Header } from './header'
import { InputRow } from './input-row'
import { Row } from './row'

// styles
import s from './index.module.css'

// types
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

export const Table = ({ categories, isTrash, records }: IProps) => {
	return (
		<div className={s.Table}>
			<Header />
			<InputRow categories={categories} />
			{records.map(record => (
				<Row key={record.id} record={record} />
			))}
		</div>
	)
}

interface IProps {
	categories: IFinanceCategory[]
	isTrash?: boolean
	records: IFinanceRecord[]
}
