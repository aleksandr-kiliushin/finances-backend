import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'

// Components
import { ISvgProps, Svg } from '#components/lib/svg'

// Styles
import s from './index.module.css'

export const Navbar = () => {
	const { pathname } = useRouter()

	// To do: Return null if !isLoggedIn.

	const sectionsData: ISection[] = [
		{ href: '/', svgName: 'home' },
		{ href: '/records', svgName: 'box' },
		{ href: '/stats', svgName: 'chart-up' },
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
