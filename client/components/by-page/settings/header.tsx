import React from 'react'
import cx from 'classnames'

// components
import { Svg } from '#lib/svg'

// styles
import s from './index.module.css'

export const Header = ({ toggleIsAddCategoryRowShown }: IProps) => {
	return (
		<div className={s.Row}>
			<div className={s.HeaderCell}>category</div>

			<div className={s.HeaderCell}>type</div>

			<div className={cx(s.HeaderCell, s.HeaderActionCell)} onClick={toggleIsAddCategoryRowShown}>
				<Svg name="plus" />
			</div>
		</div>
	)
}

interface IProps {
	toggleIsAddCategoryRowShown: () => void
}
