import React from 'react'

// components
import Link from 'next/link'

// styles
import s from '#styles/Navbar.module.css'

export default function Header() {
	return (
		<nav className={s.Navbar}>
			<div className={s.Sections}>
				<Link href="/">
					<a className={s.SectionLink}>home</a>
				</Link>

				<Link href="/settings">
					<a className={s.SectionLink}>settings</a>
				</Link>

				<Link href="/about">
					<a className={s.SectionLink}>about</a>
				</Link>
			</div>
		</nav>
	)
}
