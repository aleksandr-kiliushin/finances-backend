import React, { useEffect, useState } from 'react'

// Components
import { Table } from '#components/Table'
import { Row } from '#components/Table/Row'
import { Cell } from '#components/Table/Cell'

// Styles
import s from './index.module.css'

// Types
import { IFinanceCategory } from '#interfaces/finance'

export const Settings = () => {
	const [categories, setCategories] = useState<IFinanceCategory[]>([])

	useEffect(() => {
		const options = {
			headers: {
				Authorization: 'Bearer ' + localStorage.authToken,
				'Content-Type': 'application/json',
			},
		}

		fetch('api/finance-category', options)
			.then((response) => response.json())
			.then((categories) => setCategories(categories))
	}, [])

	return (
		<Table title="Finance categories">
			<Row cnRow={s.Row}>
				<Cell>Category</Cell>
				<Cell>Type</Cell>
				<Cell>Edit</Cell>
				<Cell>Del</Cell>
			</Row>

			{categories.map(({ id, name, type }) => (
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
