import React from 'react'

// components
import Image from 'next/image'

// svg
import SvgCross from '#svg/cross.svg'
import SvgEdit from '#svg/edit.svg'

// styles
import s from '#style-by-page/finance/records-table.module.css'

// types
import { IFinanceRecord } from '#interfaces/finance'

export const Row = ({ record }: IProps) => {
	const { amount, category, date } = record

	return (
		<div className={s.Row}>
			<div className={s.Cell}>{amount}</div>
			<div className={s.Cell}>{category.name}</div>
			<div className={s.Cell}>{date}</div>
			<div className={s.Cell}>
				<Image layout="fill" src={SvgEdit} />
			</div>
			<div className={s.Cell}>
				<Image layout="fill" src={SvgCross} />
			</div>
		</div>
	)
}

interface IProps {
	record: IFinanceRecord
}
