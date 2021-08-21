import { useState } from 'react'

// gql
import { getFinanceRecordsQuery } from '#gql/get-finance-records.query'

// components
import { Header } from '#comp-by-page/finance/records-table/header'
import { InputRow } from '#comp-by-page/finance/records-table/input-row'
import { Row } from '#comp-by-page/finance/records-table/row'

// styles
import s from '#comp-by-page/finance/records-table/index.module.css'

export default function Records() {
	const [isAddRecordRowShown, setIsAddRecordRowShown] = useState(false)

	const { data } = getFinanceRecordsQuery({
		variables: { isTrashed: false },
	})

	return (
		<div className={s.Table}>
			<Header
				isTrash={false}
				toggleIsAddRecordRowShown={() => setIsAddRecordRowShown(!isAddRecordRowShown)}
			/>

			{isAddRecordRowShown && (
				<InputRow closeInputRow={() => setIsAddRecordRowShown(false)} record={null} />
			)}

			{data?.financeRecords.map(record => (
				<Row key={record.id} record={record} />
			))}
		</div>
	)
}
