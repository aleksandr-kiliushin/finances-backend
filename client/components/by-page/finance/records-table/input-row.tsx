import React from 'react'

// components
import Image from 'next/image'

// svg
import SvgCheckmark from '#svg/checkmark.svg'
import SvgCross from '#svg/cross.svg'

// style
import s from '#style-by-page/finance/records-table.module.css'

export const InputRow = () => {
	return (
		<form className={s.Row}>
			<div className={s.Cell}>
				<input onChange={() => {}} type="number" value="999999" style={{ width: '100%' }} />
			</div>
			<div className={s.Cell}>
				<input list="categories" onChange={() => {}} style={{ width: '100%' }} type="text" />
				<datalist id="categories">
					{[
						{ id: 1, name: 'health' },
						{ id: 2, name: 'meal' },
						{ id: 3, name: 'education' },
					].map(({ id, name }) => (
						<option key={id} value={name} />
					))}
				</datalist>
			</div>
			<div className={s.Cell}>
				<input type="date" style={{ width: '100%' }} />
			</div>
			<div className={s.Cell}>
				<Image layout="fill" src={SvgCheckmark} />
			</div>
			<div className={s.Cell}>
				<Image layout="fill" src={SvgCross} />
			</div>
		</form>
	)
}
