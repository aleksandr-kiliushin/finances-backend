import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

// gql
import {
	CREATE_FINANCE_RECORD,
	ICreateFinanceRecordData,
	ICreateFinanceRecordVars,
} from '#gql/create-finance-record.mutation'

// components
import { Svg } from '#lib/svg'
import { Datalist } from 'components/lib/datalist'

// styles
import s from './index.module.css'

// types
import { IFinanceCategory } from '#interfaces/finance'

export const InputRow = ({ categories }: IProps) => {
	const [amount, setAmount] = useState('')
	const [category, setCategory] = useState<IFinanceCategory | null>(null)
	const [date, setDate] = useState('')

	const [createFinanceRecord, { data: createdFinanceRecordData }] = useMutation<
		ICreateFinanceRecordData,
		ICreateFinanceRecordVars
	>(CREATE_FINANCE_RECORD)

	return (
		<div className={s.Row}>
			<div className={s.Cell}>
				<input
					className={s.CellInput}
					onChange={e => {
						setAmount(e.target.value)
					}}
					type="number"
					value={amount}
				/>
			</div>
			<div className={s.Cell}>
				<Datalist
					options={categories}
					renderOption={category => (
						<div
							key={category.id}
							onClick={() => setCategory(category)}
							className={category.type.name === 'expense' ? s.ExpenseCategory : s.IncomeCategory}
						>
							{category.name}
						</div>
					)}
					selectedOptionText={category?.name}
				/>
			</div>
			<div className={s.Cell}>
				<input
					className={s.CellInput}
					onChange={e => setDate(e.target.value)}
					type="date"
					value={date}
				/>
			</div>
			<div
				className={s.Cell}
				onClick={() => {
					if (amount === '' || !category || !date) {
						alert('Please, complete all fields.')
						return
					}
					createFinanceRecord({ variables: { amount: +amount, categoryId: category.id, date } })
				}}
			>
				<Svg name="checkmark" />
			</div>
			<div className={s.Cell}>
				<Svg name="cross" />
			</div>
		</div>
	)
}

interface IProps {
	categories: IFinanceCategory[]
}
