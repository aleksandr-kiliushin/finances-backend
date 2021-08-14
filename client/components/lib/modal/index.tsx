import React from 'react'

// styles
import s from './index.module.css'

export const Modal = ({
	onCancelButtonClick,
	onSubmitButtonClick,
	submitButtonText,
	text,
}: IProps) => {
	return (
		<div className={s.Modal}>
			<div className={s.Text}>{text}</div>
			<div className={s.ButtonsContainer}>
				<button className={s.CancelButton} onClick={onCancelButtonClick}>
					cancel
				</button>
				<button className={s.SubmitButton} disabled onClick={onSubmitButtonClick}>
					{submitButtonText}
				</button>
			</div>
		</div>
	)
}

interface IProps {
	onCancelButtonClick: () => void
	onSubmitButtonClick: () => void
	submitButtonText: string
	text: string
}
