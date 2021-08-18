import { useQuery } from '@apollo/client'

// gql
import {
	GET_FINANCE_RECORDS,
	IGetFinanceRecordsData,
	IGetFinanceRecordsVars,
} from '#gql/get-finance-records.query'

// components
import { Header } from '#comp-by-page/finance/records-table/header'
import { Row } from '#comp-by-page/finance/records-table/row'

// styles
import s from '#comp-by-page/finance/records-table/index.module.css'

export default function Trash() {
	const { data } = useQuery<IGetFinanceRecordsData, IGetFinanceRecordsVars>(GET_FINANCE_RECORDS, {
		variables: { isTrashed: true },
	})

	if (!data) return null

	const { financeRecords } = data

	return (
		<div className={s.Table}>
			<Header isTrash />

			{financeRecords.map(record => (
				<Row key={record.id} record={record} />
			))}
		</div>
	)
}
