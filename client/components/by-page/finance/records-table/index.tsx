import React from 'react'

// components
import { Header } from './header'
import { InputRow } from './input-row'
import { Row } from './row'

// styles
import s from '#style-by-page/finance/records-table.module.css'

// types
import { IFinanceRecord } from '#interfaces/finance'

export const Table = ({ records }: IProps) => {
	return (
		<div className={s.Table}>
			<Header />
			<InputRow />
			{records.map(record => (
				<Row key={record.id} record={record} />
			))}
		</div>
	)
}

interface IProps {
	records: IFinanceRecord[]
}
