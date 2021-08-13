import React from 'react'

// components
import Image from 'next/image'

// svg
import SVGAdd from '#svg/plus.svg'

// styles
import s from './index.module.css'

export const Header = ({ toggleIsAddRecordRowShown }: IProps) => {
	return (
		<div className={s.Row}>
			<div className={s.HeaderCell}>amount</div>
			<div className={s.HeaderCell}>category</div>
			<div className={s.HeaderCell}>date</div>
			<div className={`${s.HeaderCell} ${s.AddRecordCell}`} onClick={toggleIsAddRecordRowShown}>
				<Image layout="fill" src={SVGAdd} alt="add" />
			</div>
		</div>
	)
}

interface IProps {
	toggleIsAddRecordRowShown: () => void
}
