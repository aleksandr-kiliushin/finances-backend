import { useState } from 'react'

// gql
import { getFinanceRecordsQuery } from '#gql/get-finance-records.query'

// Components
import { Header } from '#components/by-page/finance/records-table/header'
import { InputRow } from '#components/by-page/finance/records-table/input-row'
import { Row } from '#components/by-page/finance/records-table/row'

// Styles
import s from '#components/by-page/finance/records-table/index.module.css'

export default function Records() {
	const [isAddRecordRowShown, setIsAddRecordRowShown] = useState(false)

	const { data } = getFinanceRecordsQuery({
		variables: {
			isTrashed: false,
			orderingByDate: 'DESC',
			orderingById: 'DESC',
		},
	})

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

				{data?.financeRecords.map((record) => (
					<Row key={record.id} record={record} />
				))}
			</div>
		</div>
	)
}
