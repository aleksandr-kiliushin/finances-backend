import { ReactChild, SyntheticEvent } from 'react'
import cx from 'classnames'

// Styles
import s from './index.module.css'

export const Button = ({
	background = 'primary',
	children,
	isDisabled = false,
	onClick = () => {},
	type = 'button',
}: IButtonProps) => {
	const cxButton = cx({
		[s.Button]: true,
		[s.ButtonPrimaryBackground]: background === 'primary',
		[s.ButtonRedBackground]: background === 'red',
		[s.ButtonWhiteBackground]: background === 'white',
	})

	return (
		<button className={cxButton} disabled={isDisabled} onClick={onClick} type={type}>
			{children}
		</button>
	)
}

interface IButtonProps {
	background?: 'primary' | 'red' | 'white'
	children: ReactChild
	isDisabled?: boolean
	onClick?: (e?: SyntheticEvent) => void
	type?: 'button' | 'reset' | 'submit'
}
