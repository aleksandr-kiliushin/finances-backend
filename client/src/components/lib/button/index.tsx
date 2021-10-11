import { ReactChild, SyntheticEvent } from 'react'

// Styles
import s from './index.module.css'

export const Button = ({ children, isDisabled, onClick }: IButtonProps) => {
	return (
		<button className={s.Button} disabled={isDisabled} onClick={onClick}>
			{children}
		</button>
	)
}

interface IButtonProps {
	children: ReactChild
	isDisabled?: boolean
	onClick: (e?: SyntheticEvent) => void
}
