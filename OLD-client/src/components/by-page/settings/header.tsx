import cx from 'classnames'

// Components
import { Svg } from '#components/lib/svg'

// Styles
import s from './index.module.css'

export const Header = ({ toggleIsAddCategoryRowShown }: IProps) => {
	return (
		<div className={s.Row}>
			<div className={s.HeaderCell}>category</div>

			<div className={s.HeaderCell}>type</div>

			<div className={cx(s.HeaderCell, s.HeaderActionCell)} onClick={toggleIsAddCategoryRowShown}>
				<Svg name="plus-in-circle" />
			</div>
		</div>
	)
}

interface IProps {
	toggleIsAddCategoryRowShown: () => void
}
