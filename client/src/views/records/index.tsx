import React, { useEffect, useState } from 'react'

// Components
import { Svg } from '#components/Svg'
import { Table } from '#components/Table'
import { Row } from '#components/Table/Row'
import { Cell } from '#components/Table/Cell'

// Utils
import { useAppDispatch, useAppSelector } from '#utils/hooks'

// Styles
import s from './index.module.css'

// Types
import { getRecords } from '#models/finance/slice'

export const Records = () => {
	const dispatch = useAppDispatch()

	const [areTrashedRecordsShown, setAreTrashedRecordsShown] = useState(false)

	const records = useAppSelector(
		(state) => state.finance.records[areTrashedRecordsShown ? 'trashed' : 'notTrashed'],
	)

	useEffect(() => {
		dispatch(getRecords())
	}, [])

	return (
		<Table title="Finance records">
			<Row cnRow={s.HeaderRow} isHeaderRow>
				<Cell>Amount</Cell>
				<Cell>Category</Cell>
				<Cell>Date</Cell>
				<Cell>
					<button onClick={() => setAreTrashedRecordsShown(!areTrashedRecordsShown)}>Switch</button>
				</Cell>
			</Row>

			{records.items.map(({ amount, category, date, id }) => (
				<Row cnRow={s.Row} key={id}>
					<Cell>{amount}</Cell>
					<Cell>{category.name}</Cell>
					<Cell>{date.slice(2)}</Cell>
					<Cell>
						<Svg name="pencil" />
					</Cell>
					<Cell>
						<Svg name="trash-can" />
					</Cell>
				</Row>
			))}
		</Table>
	)
}
