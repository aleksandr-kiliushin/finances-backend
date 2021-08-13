import React from 'react'

// components
import Link from 'next/link'

// styles
import s from 'styles/navbar.module.css'

export const Navbar = () => {
	return (
		<nav className={s.Navbar}>
			<Link href="/">
				<a className={s.Link}>home</a>
			</Link>

			<Link href="/records">
				<a className={s.Link}>records</a>
			</Link>

			<Link href="/trash">
				<a className={s.Link}>trash</a>
			</Link>
		</nav>
	)
}
