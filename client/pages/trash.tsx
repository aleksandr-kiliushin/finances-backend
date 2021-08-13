import React from 'react'
import { useQuery } from '@apollo/client'

// query
import {
	GET_FINANCE_RECORDS,
	IGetFinanceRecordsData,
	IGetFinanceRecordsVars,
} from '#gql/get-finance-records.query'

// components
import { Table } from '#comp-by-page/finance/records-table'

export default function Trash() {
	const { data, error, loading } = useQuery<IGetFinanceRecordsData, IGetFinanceRecordsVars>(
		GET_FINANCE_RECORDS,
		{ variables: { isTrashed: true } },
	)

	if (error) return <div>error :(</div>
	if (loading || !data) return <div>loading...</div>

	const { financeRecords } = data

	return <Table categories={[]} isTrash records={financeRecords} />
}
