import React, { forwardRef } from 'react'

// Styles
import sCommon from '#components/form-constructor/index.module.css'

// Types
import { DetailedHTMLProps, ForwardedRef, SelectHTMLAttributes } from 'react'

const Select_ = ({ options, ...rest }: IProps, ref: ForwardedRef<HTMLSelectElement>) => {
	return (
		<select className={sCommon.Input} ref={ref} {...rest}>
			{options.map(({ id, label }) => (
				<option key={id} value={id}>
					{label}
				</option>
			))}
		</select>
	)
}

export const Select = forwardRef(Select_)

interface ISelectProps {
	options: IOption[]
}

interface IOption {
	id: string
	label: string
}

type IProps = ISelectProps &
	DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
