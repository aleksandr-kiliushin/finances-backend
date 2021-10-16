import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

// Action creators
import { getRecords } from '#models/finance'

// Components
import { Svg } from '#components/Svg'
import { SwitchInput } from '#components/form-constructor/SwitchInput'
import { Table } from '#components/Table'
import { TableHeader } from '#components/Table/TableHeader'
import { TableRow } from '#components/Table/TableRow'
import { TableCell } from '#components/Table/TableCell'

// Utils
import { useAppDispatch, useAppSelector } from '#utils/hooks'

// Styles
import s from './index.module.css'

export const Records = () => {
	const dispatch = useAppDispatch()

	const { register, watch } = useForm<IFormValues>()

	const { isTrash } = watch()

	const records = useAppSelector(
		(state) => state.finance.records[isTrash ? 'trashed' : 'notTrashed'],
	)

	useEffect(() => {
		dispatch(getRecords())
	}, [])

	return (
		<Table>
			<TableHeader cnTableHeader={s.TableHeader}>
				<h3>Finance records</h3>

				<SwitchInput label="Trashed" {...register('isTrash')} />
			</TableHeader>

			<TableRow cnTableRow={s.TableHeaderRow} isTableHeaderRow>
				<TableCell>Amount</TableCell>
				<TableCell>Category</TableCell>
				<TableCell>Date</TableCell>
			</TableRow>

			{records.items.map(({ amount, category, date, id }) => (
				<TableRow cnTableRow={s.TableRow} key={id}>
					<TableCell>{amount}</TableCell>
					<TableCell>{category.name}</TableCell>
					<TableCell>{date.slice(2)}</TableCell>
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

interface IFormValues {
	isTrash: boolean
}
