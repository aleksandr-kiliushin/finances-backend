import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

// Models
import { useAppDispatch, useAppSelector } from '#utils/hooks'
import { getCategories, getRecordsTc } from '#models/finance/action-creators'

// Components
import { Button } from '#components/Button'
import { SwitchInput } from '#components/form-constructor/SwitchInput'
import { Table } from '#components/Table'
import { TableHeader } from '#components/Table/TableHeader'
import { TableRow } from '#components/Table/TableRow'
import { TableCell } from '#components/Table/TableCell'
import { RecordModal } from './RecordModal'
import { RecordTableRow } from './RecordTableRow'
import { Loader } from '#components/Loader'

// Styles
import s from './index.module.css'

export const Records = () => {
	const dispatch = useAppDispatch()

	const [isRecordCreatingModalShown, setIsRecordCreatingModalShown] = useState(false)

	const { register, watch } = useForm<IFormValues>({ defaultValues: { isTrash: false } })

	const { isTrash } = watch()

	const categories = useAppSelector((state) => state.finance.categories)
	const records = useAppSelector(
		(state) => state.finance.records[isTrash ? 'trashed' : 'notTrashed'],
	)

	const loaderRef = useRef(null)

	useEffect(() => {
		dispatch(getCategories())
		dispatch(getRecordsTc({ isTrash: false }))
		dispatch(getRecordsTc({ isTrash: true }))
	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver(() => dispatch(getRecordsTc({ isTrash })))

		if (loaderRef.current !== null) {
			observer.observe(loaderRef.current)
		}

		return () => {
			if (loaderRef.current !== null) {
				observer.unobserve(loaderRef.current)
			}
		}
	}, [getRecordsTc, isTrash, loaderRef])

	return (
		<>
			<Table>
				<TableHeader cnTableHeader={s.TableHeader}>
					<h3>Finance records</h3>

					<SwitchInput label="Trashed" {...register('isTrash')} />
				</TableHeader>

				<TableRow cnTableRow={s.TableHeaderRow} isTableHeaderRow>
					<TableCell>Amount</TableCell>
					<TableCell>Category</TableCell>
					<TableCell>Date</TableCell>
					<TableCell>
						<Button onClick={() => setIsRecordCreatingModalShown(true)}>+ New</Button>
					</TableCell>
				</TableRow>

				{records.items.map((record) => (
					<RecordTableRow
						categories={categories.items}
						isTrash={isTrash}
						key={record.id}
						record={record}
					/>
				))}

				{records.status !== 'completed' && <Loader ref={loaderRef} />}
			</Table>

			{isRecordCreatingModalShown && (
				<RecordModal
					categories={categories.items}
					closeModal={() => setIsRecordCreatingModalShown(false)}
					record={null}
				/>
			)}
		</>
	)
}

interface IFormValues {
	isTrash: boolean
}
