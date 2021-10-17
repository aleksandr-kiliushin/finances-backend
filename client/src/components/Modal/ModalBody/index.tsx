import React, { ReactNode } from 'react'

export const ModalBody = ({ children }: IProps) => {
	return <div>{children}</div>
}

interface IProps {
	children: ReactNode
}
