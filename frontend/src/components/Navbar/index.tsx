import { Link, useLocation } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

import { navigationItem } from './helpers'
import { bottomNavigationActionSx, bottomNavigationSx } from './style'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <BottomNavigation sx={bottomNavigationSx} value={pathname}>
      {navigationItem.map(({ icon, path }) => (
        <BottomNavigationAction
          component={Link}
          icon={icon}
          key={path}
          sx={bottomNavigationActionSx}
          to={path}
          value={path}
        />
      ))}
    </BottomNavigation>
  )
}

export default Navbar
