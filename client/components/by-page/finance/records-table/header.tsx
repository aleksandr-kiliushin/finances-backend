import React from 'react'
import cx from 'classnames'

// components
import { Svg } from '#lib/svg'

// styles
import s from './index.module.css'

export const Header = ({ isTrash, toggleIsAddRecordRowShown }: IProps) => {
	return (
		<div className={s.Row}>
			<div className={s.HeaderCell}>amount</div>
			<div className={s.HeaderCell}>category</div>
			<div className={s.HeaderCell}>date</div>

			{isTrash ? (
				<div className={cx(s.HeaderCell, s.HeaderActionCell)} />
			) : (
				<div className={cx(s.HeaderCell, s.HeaderActionCell)} onClick={toggleIsAddRecordRowShown}>
					<Svg name="plus" />
				</div>
			)}
		</div>
	)
}

interface IProps {
	isTrash: boolean
	toggleIsAddRecordRowShown?: () => void
}
