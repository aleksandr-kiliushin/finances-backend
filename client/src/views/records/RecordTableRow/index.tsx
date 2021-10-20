import React, { useState } from 'react'

// Components
import { Svg } from '#components/Svg'
import { TableRow } from '#components/Table/TableRow'
import { TableCell } from '#components/Table/TableCell'
import { CategoryModal } from '#views/settings/CategoryModal'

// Styles
import s from './index.module.css'

// Types
import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

export const RecordTableRow = ({ category, categoryTypes }: IProps) => {
	const [isRecordEditingModalShown, setIsRecordEditingModalShown] = useState(false)

	const { name, type } = category

	return (
		<>
			<TableRow cnTableRow={s.TableRow}>
				<TableCell>{name}</TableCell>
				<TableCell>{type.name}</TableCell>
				<TableCell onClick={() => setIsRecordEditingModalShown(true)}>
					<Svg name="pencil" />
				</TableCell>
				<TableCell onClick={() => console.log('Record deleted.')}>
					<Svg name="trash-can" />
				</TableCell>
			</TableRow>

			{isRecordEditingModalShown && (
				<CategoryModal
					category={category}
					categoryTypes={categoryTypes}
					closeModal={() => setIsRecordEditingModalShown(false)}
				/>
			)}
		</>
	)
}

interface IProps {
	category: IFinanceCategory
	categoryTypes: IFinanceCategoryType[]
}
