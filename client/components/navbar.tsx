import React from 'react'

// components
import Link from 'next/link'

// styles
import s from 'styles/navbar.module.css'

export default function Header() {
	return (
		<nav className={s.Navbar}>
			<Link href="/">
				<a className={s.Link}>home</a>
			</Link>

			<Link href="/records">
				<a className={s.Link}>records</a>
			</Link>

			<Link href="/stats">
				<a className={s.Link}>stats</a>
			</Link>

			<Link href="/thrash">
				<a className={s.Link}>thrash</a>
			</Link>
		</nav>
	)
}
