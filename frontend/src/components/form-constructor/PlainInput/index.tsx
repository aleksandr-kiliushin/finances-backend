import { DetailedHTMLProps, forwardRef, ForwardedRef, InputHTMLAttributes } from 'react'

const PlainInput_ = (props: IProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { name } = props

  return <input className="{sCommon.Input}" id={name} ref={ref} {...props} />
}

export const PlainInput = forwardRef(PlainInput_)

type IProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
