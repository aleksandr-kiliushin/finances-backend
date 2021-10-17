import React, { useEffect, useState } from 'react'

// Action creators
import { getCategories } from '#models/finance'

// Components
import { Svg } from '#components/Svg'
import { Table } from '#components/Table'
import { TableHeader } from '#components/Table/TableHeader'
import { TableRow } from '#components/Table/TableRow'
import { TableCell } from '#components/Table/TableCell'
import { Modal } from '#components/Modal'
import { ModalBody } from '#components/Modal/ModalBody'
import { ModalButtonsContainer } from '#components/Modal/ModalButtonsContainer'
import { Button } from '#components/Button'

// Utils
import { useAppDispatch, useAppSelector } from '#utils/hooks'

// Styles
import s from './index.module.css'

export const Settings = () => {
	const dispatch = useAppDispatch()
	const [isCategoryModalShown, setIsCategoryModalShown] = useState(false)

	const categories = useAppSelector((state) => state.finance.categories)

	useEffect(() => {
		dispatch(getCategories())
	}, [])

	return (
		<>
			<Table>
				<TableHeader cnTableHeader={s.TableHeader}>
					<h3>Finance categories</h3>
				</TableHeader>

				<TableRow cnTableRow={s.TableHeaderRow} isTableHeaderRow>
					<TableCell>Category</TableCell>
					<TableCell>Type</TableCell>
					<TableCell>
						<Button onClick={() => setIsCategoryModalShown(true)}>+ New</Button>
					</TableCell>
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

			{isCategoryModalShown && (
				<Modal closeModal={() => setIsCategoryModalShown(false)}>
					<ModalBody>heeh</ModalBody>

					<ModalButtonsContainer>
						<Button color="light" onClick={() => setIsCategoryModalShown(false)}>
							Cancel
						</Button>
						<Button>Submit</Button>
					</ModalButtonsContainer>
				</Modal>
			)}
		</>
	)
}
