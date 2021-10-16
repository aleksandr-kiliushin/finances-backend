import React, { useEffect } from 'react'

// Action creators
import { getCategories } from '#models/finance'

// Components
import { Svg } from '#components/Svg'
import { Table } from '#components/Table'
import { TableRow } from '#components/Table/TableRow'
import { TableCell } from '#components/Table/TableCell'

// Utils
import { useAppDispatch, useAppSelector } from '#utils/hooks'

// Styles
import s from './index.module.css'

export const Settings = () => {
	const dispatch = useAppDispatch()

	const categories = useAppSelector((state) => state.finance.categories)

	useEffect(() => {
		dispatch(getCategories())
	}, [])

	return (
		<Table>
			<TableRow cnTableRow={s.TableRow} isTableHeaderRow>
				<TableCell>Category</TableCell>
				<TableCell>Type</TableCell>
			</TableRow>

			{categories.items.map(({ id, name, type }) => (
				<TableRow cnTableRow={s.TableRow} key={id}>
					<TableCell>{name}</TableCell>
					<TableCell>{type.name}</TableCell>
					<TableCell>
						<Svg name="pencil" />
					</TableCell>
					<TableCell>
						<Svg name="trash-can" />
					</TableCell>
				</TableRow>
			))}
		</Table>
	)
}
