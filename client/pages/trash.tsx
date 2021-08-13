import React from 'react'
import { useQuery } from '@apollo/client'

// query
import {
	FINANCE_RECORDS,
	IFinanceRecordsData,
	IFinanceRecordsVars,
} from '#queries/get-finance-records.query'

// components
import { Table } from '#comp-by-page/finance/records-table'

export default function Trash() {
	const { data, error, loading } = useQuery<IFinanceRecordsData, IFinanceRecordsVars>(
		FINANCE_RECORDS,
		{ variables: { isTrashed: true } },
	)

	if (error) return <div>error :(</div>
	if (loading || !data) return <div>loading...</div>

	const { financeRecords } = data

	return <Table records={financeRecords} />
}
