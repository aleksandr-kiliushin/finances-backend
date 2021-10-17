import React from 'react'

// Components
import { RadioInput } from './RadioInput'

export const RadioGroup = ({ options }: IProps) => {
	return (
		<div>
			{options.map(({ id, value }) => (
				<RadioInput key={id} />
			))}
		</div>
	)
}

interface IRadioInputOption {
	id: number
	value: string
}

interface IProps {
	options: IRadioInputOption[]
}
