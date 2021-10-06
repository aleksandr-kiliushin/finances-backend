import { useState } from 'react'
import cx from 'classnames'

// Components
import { Svg } from '#lib/svg'
import { InputRow } from './input-row'

// Styles
import s from './index.module.css'

// Types
import { IFinanceRecord } from '#interfaces/finance'

export const Row = ({ record }: IProps) => {
	const [isEditing, setIsEditing] = useState(false)

	const { amount, category, date, id, isTrashed } = record

	const updateFinanceRecord = (body: Record<string, unknown>) => {
		fetch('api/finance-record/' + id, {
			body: JSON.stringify(body),
			headers: {
				Authorization: `Bearer ${localStorage.authToken}`,
				'Content-Type': 'application/json',
			},
			method: 'PATCH',
		})
	}

	const deleteFinanceRecord = () => {
		fetch('api/finance-record/' + id, {
			headers: {
				Authorization: `Bearer ${localStorage.authToken}`,
			},
			method: 'DELETE',
		})
	}

	const dateFormatted = new Date(date).toLocaleString('en-US', { month: 'short', day: 'numeric' })

	const cxAmount = cx({
		[s.Cell]: true,
		[s.ExpenseRecordCell]: category.type.name === 'expense',
		[s.IncomeRecordCell]: category.type.name === 'income',
	})

	if (isEditing) {
		return <InputRow closeInputRow={() => setIsEditing(false)} record={record} />
	}

	return (
		<div className={s.Row}>
			<div className={cxAmount}>{amount}</div>
			<div className={s.Cell}>{category.name}</div>
			<div className={s.Cell}>{dateFormatted}</div>
			<div
				className={s.Cell}
				onClick={
					isTrashed
						? () => updateFinanceRecord({ isTrashed: false })
						: () => setIsEditing(!isEditing)
				}
			>
				<Svg name={isTrashed ? 'reply' : 'pencil'} />
			</div>
			<div
				className={s.Cell}
				onClick={isTrashed ? deleteFinanceRecord : () => updateFinanceRecord({ isTrashed: true })}
			>
				<Svg name="trash-can" />
			</div>
		</div>
	)
}

interface IProps {
	record: IFinanceRecord
}
