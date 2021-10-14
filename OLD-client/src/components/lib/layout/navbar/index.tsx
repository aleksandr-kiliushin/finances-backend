import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'

// Fetching
import { useIsUserLoggedInQuery } from '#models/fetching/is-user-logged-in.query'

// Components
import { ISvgProps, Svg } from '#components/lib/svg'

// Styles
import s from './index.module.css'

export const Navbar = () => {
	const { pathname } = useRouter()

	const { data: isUserLoggedIn } = useIsUserLoggedInQuery()

	if (!isUserLoggedIn?.isUserLoggedIn) return null

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
