import React, { useState } from 'react'

// Components
import { Svg } from '#components/Svg'
import { TableRow } from '#components/Table/TableRow'
import { TableCell } from '#components/Table/TableCell'
import { RecordModal } from '#views/records/RecordModal'

// Styles
import s from './index.module.css'

// Types
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

export const RecordTableRow = ({ categories, record }: IProps) => {
	const [isRecordEditingModalShown, setIsRecordEditingModalShown] = useState(false)

	const { amount, date, category } = record

	return (
		<>
			<TableRow cnTableRow={s.TableRow}>
				<TableCell>{amount}</TableCell>
				<TableCell>{category.name}</TableCell>
				<TableCell>{date.slice(2)}</TableCell>
				<TableCell onClick={() => setIsRecordEditingModalShown(true)}>
					<Svg name="pencil" />
				</TableCell>
				<TableCell onClick={() => console.log('Record deleted!')}>
					<Svg name="trash-can" />
				</TableCell>
			</TableRow>

			{isRecordEditingModalShown && (
				<RecordModal
					categories={categories}
					closeModal={() => setIsRecordEditingModalShown(false)}
					record={record}
				/>
			)}
		</>
	)
}

interface IProps {
	record: IFinanceRecord
	categories: IFinanceCategory[]
}
