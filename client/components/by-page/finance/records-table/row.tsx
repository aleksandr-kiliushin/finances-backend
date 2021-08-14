import React, { useState } from 'react'
// import { useMutation } from '@apollo/client'
import cx from 'classnames'

// gql
// import {
// 	IUpdateFinanceRecordData,
// 	IUpdateFinanceRecordVars,
// 	UPDATE_FINANCE_RECORD,
// } from '#gql/update-finance-record.mutation'

// components
import { Svg } from '#lib/svg'
import { InputRow } from './input-row'

// styles
import s from './index.module.css'

// types
import { IFinanceRecord } from '#interfaces/finance'

export const Row = ({ record }: IProps) => {
	const [isEditing, setIsEditing] = useState(false)

	const { amount, category, date } = record

	// const [updatedFinanceRecord, { data: updatedFinanceRecordData }] = useMutation<
	// 	IUpdateFinanceRecordData,
	// 	IUpdateFinanceRecordVars
	// >(UPDATE_FINANCE_RECORD)

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
		<>
			{isEditing ? (
				<InputRow record={record} />
			) : (
				<div className={s.Row}>
					<div className={cxAmount}>{amount}</div>
					<div className={s.Cell}>{category.name}</div>
					<div className={s.Cell}>{dateFormatted}</div>
					<div className={s.Cell} onClick={() => setIsEditing(!isEditing)}>
						<Svg name="edit" />
					</div>
					<div className={s.Cell}>
						<Svg name="trash-can" />
					</div>
				</div>
			)}
		</>
	)
}

interface IProps {
	record: IFinanceRecord
}
