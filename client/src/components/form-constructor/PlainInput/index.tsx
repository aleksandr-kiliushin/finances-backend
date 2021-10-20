import React, { forwardRef } from 'react'

// Styles
import sCommon from '#components/form-constructor/index.module.css'

// Types
import { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes } from 'react'

const PlainInput_ = (props: IProps, ref: ForwardedRef<HTMLInputElement>) => {
	return <input className={sCommon.Input} ref={ref} {...props} />
}

export const PlainInput = forwardRef(PlainInput_)

type IProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
