import React from 'react'
import { useLocation } from 'react-router'
import cx from 'classnames'

// Components
import { ISvgProps, Svg } from '#components/Svg'

// Styles
import s from './index.module.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
	const { pathname } = useLocation()

	if (!localStorage.authToken) return null

	const sectionsData: ISection[] = [
		{ path: '/', svgName: 'home' },
		{ path: '/records', svgName: 'box' },
		{ path: '/stats', svgName: 'chart-up' },
		{ path: '/settings', svgName: 'gear' },
		{ path: '/login', svgName: 'person' },
	]

	const sectionsDataForLayout = sectionsData.map(({ path, svgName }) => ({
		className: cx({ [s.SectionLink]: true, [s.ActiveSectionLink]: pathname === path }),
		path,
		svgName,
	}))

	return (
		<nav className={s.Navbar}>
			{sectionsDataForLayout.map(({ path, className, svgName }) => (
				<Link className={className} key={path} to={path}>
					<Svg name={svgName} />
				</Link>
			))}
		</nav>
	)
}

interface ISection {
	path: string
	svgName: ISvgProps['name']
}
