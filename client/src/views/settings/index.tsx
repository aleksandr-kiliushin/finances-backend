import React, { useEffect, useState } from 'react'

// Components
import { Table } from '#components/Table'
import { Row } from '#components/Table/Row'
import { Cell } from '#components/Table/Cell'

// Utils
import { useAppDispatch, useAppSelector } from '#utils/hooks'

// Styles
import s from './index.module.css'

// Types
import { getCategories } from '#models/finance/slice'

export const Settings = () => {
	const dispatch = useAppDispatch()

	const categories = useAppSelector((state) => state.finance.categories)

	useEffect(() => {
		dispatch(getCategories())
	}, [])

	return (
		<Table title="Finance categories">
			<Row cnRow={s.Row} isHeaderRow>
				<Cell>Category</Cell>
				<Cell>Type</Cell>
				<Cell>Edit</Cell>
				<Cell>Del</Cell>
			</Row>

			{categories.items.map(({ id, name, type }) => (
				<Row cnRow={s.Row} key={id}>
					<Cell>{name}</Cell>
					<Cell>{type.name}</Cell>
					<Cell>Edit</Cell>
					<Cell>Del</Cell>
				</Row>
			))}
		</Table>
	)
}
