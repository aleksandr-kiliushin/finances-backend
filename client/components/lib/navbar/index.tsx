import React from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'

// components
import Link from 'next/link'

// styles
import s from './index.module.css'
import { Svg } from '#lib/svg'

export const Navbar = () => {
	const { pathname } = useRouter()

	return (
		<nav className={s.Navbar}>
			<Link href="/">
				<a className={cx({ [s.SectionLink]: true, [s.ActiveSectionLink]: pathname === '/' })}>
					<Svg name="home" />
				</a>
			</Link>

			<Link href="/records">
				<a
					className={cx({ [s.SectionLink]: true, [s.ActiveSectionLink]: pathname === '/records' })}
				>
					<Svg name="box" />
				</a>
			</Link>

			<Link href="/trash">
				<a className={cx({ [s.SectionLink]: true, [s.ActiveSectionLink]: pathname === '/trash' })}>
					<Svg name="trash-can" />
				</a>
			</Link>

			<Link href="/settings">
				<a
					className={cx({ [s.SectionLink]: true, [s.ActiveSectionLink]: pathname === '/settings' })}
				>
					<Svg name="gear" />
				</a>
			</Link>

			<Link href="/login">
				<a className={cx({ [s.SectionLink]: true, [s.ActiveSectionLink]: pathname === '/login' })}>
					<Svg name="person" />
				</a>
			</Link>
		</nav>
	)
}
