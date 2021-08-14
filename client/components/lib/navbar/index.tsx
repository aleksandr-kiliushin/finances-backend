import React from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'

// components
import Link from 'next/link'

// styles
import s from './index.module.css'

export const Navbar = () => {
	const { pathname } = useRouter()

	return (
		<nav className={s.Navbar}>
			<Link href="/">
				<a className={cx({ [s.SectionLink]: true, [s.ActiveSectionLink]: pathname === '/' })}>
					home
				</a>
			</Link>

			<Link href="/records">
				<a
					className={cx({ [s.SectionLink]: true, [s.ActiveSectionLink]: pathname === '/records' })}
				>
					records
				</a>
			</Link>

			<Link href="/trash">
				<a className={cx({ [s.SectionLink]: true, [s.ActiveSectionLink]: pathname === '/trash' })}>
					trash
				</a>
			</Link>

			<Link href="/settings">
				<a
					className={cx({ [s.SectionLink]: true, [s.ActiveSectionLink]: pathname === '/settings' })}
				>
					settings
				</a>
			</Link>
		</nav>
	)
}
