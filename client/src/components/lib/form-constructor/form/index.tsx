import { DetailedHTMLProps, FormHTMLAttributes } from 'react'

// Styles
import s from './index.module.css'

export const Form = ({ children }: IProps) => {
	return <form className={s.Form}>{children}</form>
}

type IProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
