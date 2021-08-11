import React, { useEffect, useState } from 'react'

// components
import Header from '@comp-by-page/records/header'
import InputRow from '@comp-by-page/records/input-row'

// styles
import s from '@style-by-page/records.module.css'

// types
import { IFinanceRecord } from '@interfaces/finance'

export default function Records() {
	const [records, setRecords] = useState([])

	useEffect(() => {
		fetch('api/record')
			.then(response => response.json())
			.then(records => setRecords(records))
	}, [])

	return (
		<div className={s.Table}>
			<Header />
			<InputRow />
			{records.map(({ amount, category, date, id }: IFinanceRecord) => (
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
