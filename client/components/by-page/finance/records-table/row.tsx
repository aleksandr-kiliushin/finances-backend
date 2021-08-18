import { useState } from 'react'
import { useMutation } from '@apollo/client'
import cx from 'classnames'

// gql
import {
	IUpdateFinanceRecordData,
	IUpdateFinanceRecordVars,
	UPDATE_FINANCE_RECORD,
} from '#gql/update-finance-record.mutation'
import {
	IDeleteFinanceRecordData,
	IDeleteFinanceRecordVars,
	DELETE_FINANCE_RECORD,
} from '#gql/delete-finance-record.mutation'

// components
import { Svg } from '#lib/svg'
import { InputRow } from './input-row'

// styles
import s from './index.module.css'

// types
import { IFinanceRecord } from '#interfaces/finance'

export const Row = ({ record }: IProps) => {
	const [isEditing, setIsEditing] = useState(false)

	const { amount, category, date, id } = record

	const [updatedFinanceRecord, { data: updatedFinanceRecordData }] = useMutation<
		IUpdateFinanceRecordData,
		IUpdateFinanceRecordVars
	>(UPDATE_FINANCE_RECORD)

	const [deleteFinanceRecord, { data: deleteFinanceRecordData }] = useMutation<
		IDeleteFinanceRecordData,
		IDeleteFinanceRecordVars
	>(DELETE_FINANCE_RECORD)

	const dateFormatted = new Date(date).toLocaleString('en-US', { month: 'short', day: 'numeric' })

	const cxAmount = cx({
		[s.Cell]: true,
		[s.ExpenseRecordCell]: category.type.name === 'expense',
		[s.IncomeRecordCell]: category.type.name === 'income',
	})

	if (isEditing) {
		return <InputRow closeInputRow={() => setIsEditing(false)} record={record} />
	}

	if (record.isTrashed) {
		return (
			<div className={s.Row}>
				<div className={cxAmount}>{amount}</div>
				<div className={s.Cell}>{category.name}</div>
				<div className={s.Cell}>{dateFormatted}</div>
				<div
					className={s.Cell}
					onClick={() => updatedFinanceRecord({ variables: { id, isTrashed: false } })}
				>
					<Svg name="undelete" />
				</div>
				<div className={s.Cell} onClick={() => deleteFinanceRecord({ variables: { id } })}>
					<Svg name="trash-can" />
				</div>
			</div>
		)
	}

	return (
		<div className={s.Row}>
			<div className={cxAmount}>{amount}</div>
			<div className={s.Cell}>{category.name}</div>
			<div className={s.Cell}>{dateFormatted}</div>
			<div className={s.Cell} onClick={() => setIsEditing(!isEditing)}>
				<Svg name="edit" />
			</div>
			<div
				className={s.Cell}
				onClick={() => updatedFinanceRecord({ variables: { id, isTrashed: true } })}
			>
				<Svg name="trash-can" />
			</div>
		</div>
	)
}

interface IProps {
	record: IFinanceRecord
}
