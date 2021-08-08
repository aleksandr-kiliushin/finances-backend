import React from 'react'

import s from '@style-by-page/records.module.css'

export default function InputRow() {
	return (
		<div className={s.Row}>
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
			<div className={s.Cell}>ok</div>
			<div className={s.Cell}>del</div>
		</div>
	)
}
