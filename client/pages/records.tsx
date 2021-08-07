import React, { useEffect, useState } from 'react'

// components
import Header from '@comp-by-page/records/header'

// styles
import s from '@style-by-page/records.module.css'

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

			{records.map(({ amount, category, date, id }) => (
				<div key={id} className={s.Row}>
					<div className={s.Cell}>{amount}</div>
					<div className={s.Cell}>{category}</div>
					<div className={s.Cell}>{date}</div>
					<div className={s.Cell}>edit</div>
					<div className={s.Cell}>del</div>
				</div>
			))}
		</div>
	)
}
