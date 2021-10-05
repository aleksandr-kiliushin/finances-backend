import { useEffect, useState } from 'react'

// Components
import { Header } from '#comp-by-page/finance/records-table/header'
import { InputRow } from '#comp-by-page/finance/records-table/input-row'
import { Row } from '#comp-by-page/finance/records-table/row'

// Styles
import s from '#comp-by-page/finance/records-table/index.module.css'

// Types
import { IFinanceRecord } from '#interfaces/finance'

export default function Records() {
	const [isAddRecordRowShown, setIsAddRecordRowShown] = useState(false)
	const [financeRecords, setFinanceRecords] = useState<IFinanceRecord[]>([])

	useEffect(() => {
		fetch('api/finance-record?isTrashed=false&orderingByDate=DESC&orderingById=DESC', {
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
			<Header
				isTrash={false}
				toggleIsAddRecordRowShown={() => setIsAddRecordRowShown(!isAddRecordRowShown)}
			/>

			<div className={s.Body}>
				{isAddRecordRowShown && (
					<InputRow closeInputRow={() => setIsAddRecordRowShown(false)} record={null} />
				)}

				{financeRecords.map(record => (
					<Row key={record.id} record={record} />
				))}
			</div>
		</div>
	)
}
