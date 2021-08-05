import React, { ReactNode } from 'react'
import Navbar from '#components/navbar'

export default function Layout({ children }: IProps) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	)
}

interface IProps {
	children: ReactNode
}
