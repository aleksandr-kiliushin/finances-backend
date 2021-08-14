import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

// gql
import {
	GET_FINANCE_RECORDS,
	IGetFinanceRecordsData,
	IGetFinanceRecordsVars,
} from '#gql/get-finance-records.query'

// components
import { Header } from './header'
import { InputRow } from './input-row'
import { Row } from './row'

// styles
import s from './index.module.css'

export const Table = ({ isTrash }: IProps) => {
	const [isAddRecordRowShown, setIsAddRecordRowShown] = useState(false)

	const { data } = useQuery<IGetFinanceRecordsData, IGetFinanceRecordsVars>(GET_FINANCE_RECORDS, {
		variables: { isTrashed: !!isTrash },
	})

	if (!data) return null

	const { financeRecords } = data

	return (
		<div className={s.Table}>
			<Header toggleIsAddRecordRowShown={() => setIsAddRecordRowShown(!isAddRecordRowShown)} />

			{isAddRecordRowShown && <InputRow record={null} />}

			{financeRecords.map(record => (
				<Row key={record.id} record={record} />
			))}
		</div>
	)
}

interface IProps {
	isTrash?: boolean
}
