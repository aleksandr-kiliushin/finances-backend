import React from 'react'
import { useQuery } from '@apollo/client'

// query
import {
	FINANCE_RECORDS,
	IFinanceRecordsData,
	IFinanceRecordsVars,
} from '#queries/get-finance-records.query'

// components
import Header from '#comp-by-page/records/header'
import InputRow from '#comp-by-page/records/input-row'

// styles
import s from '#style-by-page/records.module.css'

export default function Records() {
	const { data, error, loading } = useQuery<IFinanceRecordsData, IFinanceRecordsVars>(
		FINANCE_RECORDS,
		{ variables: { isTrashed: false } },
	)

	if (error) return <div>error :(</div>
	if (loading || !data) return <div>loading...</div>

	const { financeRecords } = data

	return (
		<div className={s.Table}>
			<Header />
			<InputRow />
			{financeRecords.map(({ amount, category, date, id }) => (
				<div key={id} className={s.Row}>
					<div className={s.Cell}>{amount}</div>
					<div className={s.Cell}>{category.name}</div>
					<div className={s.Cell}>{date}</div>
					<div className={s.Cell}>edit</div>
					<div className={s.Cell}>del</div>
				</div>
			))}
		</div>
	)
}
