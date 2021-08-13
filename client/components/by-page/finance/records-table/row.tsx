import React from 'react'
import { useMutation } from '@apollo/client'

// gql
import {
	IUpdateFinanceRecordData,
	IUpdateFinanceRecordVars,
	UPDATE_FINANCE_RECORD,
} from '#gql/update-finance-record.mutation'

// components
import Image from 'next/image'

// svg
import SvgCross from '#svg/cross.svg'
import SvgEdit from '#svg/edit.svg'

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

	const cxAmount = cx({
		[s.Cell]: true,
		[s.ExpenseRecordCell]: category.type.name === 'expense',
		[s.IncomeRecordCell]: category.type.name === 'income',
	})

	return (
		<div className={s.Row}>
			<div className={cxAmount}>{amount}</div>
			<div className={s.Cell}>{category.name}</div>
			<div className={s.Cell}>{date}</div>
			<div className={s.Cell}>
				<Image alt="edit" layout="fill" onClick={() => {}} src={SvgEdit} />
			</div>
			<div className={s.Cell}>
				<Image
					alt="delete"
					layout="fill"
					onClick={() => {
						updatedFinanceRecord({ variables: { id, isTrashed: true } })
					}}
					src={SvgCross}
				/>
			</div>
		</div>
	)
}

interface IProps {
	record: IFinanceRecord
}
