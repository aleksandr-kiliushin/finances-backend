import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

const HookFormInput_ = (props: IProps, ref: ForwardedRef<HTMLInputElement>) => {
	return <input ref={ref} {...props} />
}

export const HookFormInput = forwardRef(HookFormInput_)

type IProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
