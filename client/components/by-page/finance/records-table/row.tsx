import React from 'react'
import { useMutation } from '@apollo/client'

// gql
import {
	IUpdateFinanceRecordData,
	IUpdateFinanceRecordVars,
	UPDATE_FINANCE_RECORD,
} from '#gql/update-finance-record.mutation'

// components
import { Svg } from '#lib/svg'

// styles
import s from './index.module.css'

// types
import { IFinanceRecord } from '#interfaces/finance'
import cx from 'classnames'

export const Row = ({ record }: IProps) => {
	const { amount, category, date, id } = record

	const [updatedFinanceRecord, { data: updatedFinanceRecordData }] = useMutation<
		IUpdateFinanceRecordData,
		IUpdateFinanceRecordVars
	>(UPDATE_FINANCE_RECORD)

	const dateFormatted = new Date(date).toLocaleString(undefined, {
		month: 'short',
		day: 'numeric',
	})

	const cxAmount = cx({
		[s.Cell]: true,
		[s.ExpenseRecordCell]: category.type.name === 'expense',
		[s.IncomeRecordCell]: category.type.name === 'income',
	})

	return (
		<div className={s.Row}>
			<div className={cxAmount}>{amount}</div>
			<div className={s.Cell}>{category.name}</div>
			<div className={s.Cell}>{dateFormatted}</div>
			<div className={s.Cell}>
				<Svg name="edit" />
			</div>
			<div className={s.Cell}>
				<Svg name="cross" />
			</div>
		</div>
	)
}

interface IProps {
	record: IFinanceRecord
}
