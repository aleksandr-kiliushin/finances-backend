import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export const HookFormInput = (props: IProps) => {
	console.log(props)
	return <input {...props} />
}

type IProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
