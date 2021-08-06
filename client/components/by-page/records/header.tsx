import React from 'react'

import s from '@style-by-page/records.module.css'

export default function Header() {
	return (
		<>
			<div className={s.HeaderCell}>amount</div>
			<div className={s.HeaderCell}>category</div>
			<div className={s.HeaderCell}>date</div>
			<div className={`${s.HeaderCell} ${s.AddRecordCell}`}>add</div>
		</>
	)
}
