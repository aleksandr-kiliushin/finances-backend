import cx from 'classnames'

// Components
import { Svg } from '#lib/svg'

// Styles
import s from './index.module.css'

export const Header = ({ isTrash, toggleIsAddRecordRowShown }: IProps) => {
	return (
		<div className={cx(s.Row, s.HeaderRow)}>
			<div className={s.Cell}>amount</div>
			<div className={s.Cell}>category</div>
			<div className={s.Cell}>date</div>

			{isTrash ? (
				<div className={cx(s.Cell, s.HeaderActionCell)} />
			) : (
				<div className={cx(s.Cell, s.HeaderActionCell)} onClick={toggleIsAddRecordRowShown}>
					<Svg name="plus-in-circle" />
				</div>
			)}
		</div>
	)
}

interface IProps {
	isTrash: boolean
	toggleIsAddRecordRowShown?: () => void
}
