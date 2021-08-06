import React from 'react'

// components
import Header from '@comp-by-page/records/header'

// styles
import s from '@style-by-page/records.module.css'

export default function Records() {
	return (
		<div className={s.Table}>
			<Header />

			<div className={s.Cell}>+100000</div>
			<div className={s.Cell}>salary</div>
			<div className={s.Cell}>2020-15-01</div>
			<div className={s.Cell}>edit</div>
			<div className={s.Cell}>del</div>

			<div className={s.Cell}>-9000</div>
			<div className={s.Cell}>health</div>
			<div className={s.Cell}>2020-13-01</div>
			<div className={s.Cell}>edit</div>
			<div className={s.Cell}>del</div>

			<div className={s.Cell}>-23452</div>
			<div className={s.Cell}>education</div>
			<div className={s.Cell}>2020-24-01</div>
			<div className={s.Cell}>edit</div>
			<div className={s.Cell}>del</div>
		</div>
	)
}
