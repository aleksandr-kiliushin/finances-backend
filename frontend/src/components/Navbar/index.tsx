import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { css } from '@emotion/react'

import { Svg, ISvgProps } from '#components/Svg'

export const Navbar = () => {
  const { pathname } = useLocation()

  const sectionsData: ISection[] = [
    { path: '/', svgName: 'home' },
    { path: '/records', svgName: 'box' },
    { path: '/stats', svgName: 'chart-up' },
    { path: '/settings', svgName: 'gear' },
    { path: '/login', svgName: 'person' },
  ]

  const sectionsDataForLayout = sectionsData.map(({ path, svgName }) => ({
    path,
    svgName,
  }))

  return (
    <nav
      css={css`
        position: fixed;
        bottom: 0;
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        justify-content: space-around;
        height: var(--navbar-height);
        width: 100%;
        background: var(--color-theme-1);
      `}
    >
      {sectionsDataForLayout.map(({ path, svgName }) => (
        <Link
          css={css`
            height: ${pathname === path ? '55px' : '40px'};
            width: ${pathname === path ? '55px' : '40px'};
            fill: ${pathname === path ? 'white' : 'lightgray'};
            transition: height 0.15s, width 0.15s, fill 0.15s;
          `}
          key={path}
          to={path}
        >
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
