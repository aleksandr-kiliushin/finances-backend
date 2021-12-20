import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

import { navigationItem } from './helpers'

export const Navbar = () => {
  return (
    <Box>
      <BottomNavigation>
        {navigationItem.map(({ icon, path }) => (
          <Link key={path} to={path}>
            <BottomNavigationAction icon={icon} value={path} />
          </Link>
        ))}
      </BottomNavigation>
    </Box>
  )
}
