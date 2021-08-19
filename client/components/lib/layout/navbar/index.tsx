import { useContext } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'

// context
import { authContext } from 'context/auth'

// components
import { ISvgProps, Svg } from '#lib/svg'
import Link from 'next/link'

// styles
import s from './index.module.css'

export const Navbar = () => {
	const { pathname } = useRouter()

	const { authToken } = useContext(authContext)

	if (!authToken) return null

	const sectionsData: ISection[] = [
		{ href: '/', svgName: 'home' },
		{ href: '/records', svgName: 'box' },
		{ href: '/trash', svgName: 'trash-can' },
		{ href: '/settings', svgName: 'gear' },
		{ href: '/login', svgName: 'person' },
	]

	const sectionsDataForLayout = sectionsData.map(({ href, svgName }) => ({
		className: cx({ [s.SectionLink]: true, [s.ActiveSectionLink]: pathname === href }),
		href,
		svgName,
	}))

	return (
		<nav className={s.Navbar}>
			{sectionsDataForLayout.map(({ href, className, svgName }) => (
				<Link href={href} key={href}>
					<a className={className}>
						<Svg name={svgName} />
					</a>
				</Link>
			))}
		</nav>
	)
}

interface ISection {
	href: string
	svgName: ISvgProps['name']
}
