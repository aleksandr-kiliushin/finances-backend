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
import {
	FINANCE_CATEGORIES,
	IFinanceCategoriesData,
	IFinanceCategoriesVars,
} from '#queries/get-finance-categories.query'

export default function Records() {
	const { data: recordsData } = useQuery<IFinanceRecordsData, IFinanceRecordsVars>(
		FINANCE_RECORDS,
		{
			variables: { isTrashed: false },
		},
	)

	const { data: categoriesData } = useQuery<IFinanceCategoriesData, IFinanceCategoriesVars>(
		FINANCE_CATEGORIES,
	)

	if (!recordsData || !categoriesData) return <div>loading...</div>

	const { financeRecords } = recordsData

	return <Table records={financeRecords} />
}
