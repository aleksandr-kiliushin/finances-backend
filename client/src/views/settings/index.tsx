import React, { useEffect, useState } from 'react'

// Components
import { Table } from '#components/Table'
import { Row } from '#components/Table/Row'
import { Cell } from '#components/Table/Cell'

// Styles
import s from './index.module.css'

export const Settings = () => {
	const [categories, setCategories] = useState([])
	const [categoryTypes, setCategoryTypes] = useState([])

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

		fetch('api/finance-category-type', options)
			.then((response) => response.json())
			.then((categoryTypes) => setCategoryTypes(categoryTypes))
	}, [])

	return (
		<Table title="Finance categories">
			<Row cnRow={s.Row} isHeaderRow>
				<Cell>Category</Cell>
				<Cell>Type</Cell>
				<Cell>Edit</Cell>
				<Cell>Del</Cell>
			</Row>
		</Table>
	)
}
