import { ReactChild, SyntheticEvent } from 'react'
import cx from 'classnames'

// Styles
import s from './index.module.css'

export const Button = ({
	backgroundColor = 'primary',
	children,
	isDisabled = false,
	onClick,
}: IButtonProps) => {
	const cxButton = cx({
		[s.Button]: true,
		[s.ButtonPrimaryBackgroundColor]: backgroundColor === 'primary',
		[s.ButtonRedBackgroundColor]: backgroundColor === 'red',
		[s.ButtonWhiteBackgroundColor]: backgroundColor === 'white',
	})

	return (
		<button className={cxButton} disabled={isDisabled} onClick={onClick}>
			{children}
		</button>
	)
}

interface IButtonProps {
	backgroundColor?: 'primary' | 'red' | 'white'
	children: ReactChild
	isDisabled?: boolean
	onClick: (e?: SyntheticEvent) => void
}
