import { useEffect, useState } from 'react'

// Components
import { Header } from '#comp-by-page/finance/records-table/header'
import { Row } from '#comp-by-page/finance/records-table/row'

// Styles
import s from '#comp-by-page/finance/records-table/index.module.css'

// Types
import { IFinanceRecord } from '#interfaces/finance'

export default function Trash() {
	const [financeRecords, setFinanceRecords] = useState<IFinanceRecord[]>([])

	useEffect(() => {
		fetch('api/finance-record?isTrashed=true&orderingByDate=DESC&orderingById=DESC', {
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJzYXNoYSIsImlhdCI6MTYzMzQ1Nzk4OCwiZXhwIjoxNjM0MzIxOTg4fQ.aREJJltS80P33yfzdIeLIqyW3_LCpeVNC5imu1Akwo0',
			},
		})
			.then(response => response.json())
			.then(records => setFinanceRecords(records))
	}, [])

	return (
		<div className={s.Table}>
			<Header isTrash />

			<div className={s.Body}>
				{financeRecords.map(record => (
					<Row key={record.id} record={record} />
				))}
			</div>
		</div>
	)
}
