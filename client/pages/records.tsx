import React from 'react'
import { useQuery } from '@apollo/client'

// query
import {
	GET_FINANCE_RECORDS,
	IGetFinanceRecordsData,
	IGetFinanceRecordsVars,
} from '#gql/get-finance-records.query'
import {
	GET_FINANCE_CATEGORIES,
	IGetFinanceCategoriesData,
	IGetFinanceCategoriesVars,
} from '#gql/get-finance-categories.query'

// components
import { Table } from '#comp-by-page/finance/records-table'

export default function Records() {
	const { data: recordsData } = useQuery<IGetFinanceRecordsData, IGetFinanceRecordsVars>(
		GET_FINANCE_RECORDS,
		{
			variables: { isTrashed: false },
		},
	)

	const { data: categoriesData } = useQuery<IGetFinanceCategoriesData, IGetFinanceCategoriesVars>(
		GET_FINANCE_CATEGORIES,
	)

	if (!recordsData || !categoriesData) return <div>loading...</div>

	const { financeRecords } = recordsData
	const { financeCategories } = categoriesData

	return <Table records={financeRecords} categories={financeCategories} />
}
