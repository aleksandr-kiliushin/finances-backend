import { ReactElement } from 'react'
import BarChartIcon from '@mui/icons-material/BarChart'
import HomeIcon from '@mui/icons-material/Home'
import ListIcon from '@mui/icons-material/List'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'

export const navigationItem: Section[] = [
  { icon: <HomeIcon />, path: '/' },
  { icon: <ListIcon />, path: '/records?isTrash=false' },
  { icon: <BarChartIcon />, path: '/stats' },
  { icon: <SettingsIcon />, path: '/settings' },
  { icon: <PersonIcon />, path: '/login' },
]

export const getActiveNavigationIndex = (pathname: string) => {
  if (/^\/$/.test(pathname)) return 0
  if (/^\/records/.test(pathname)) return 1
  if (/^\/stats/.test(pathname)) return 2
  if (/^\/settings/.test(pathname)) return 3
  if (/^\/login/.test(pathname)) return 4
  return -1
}

interface Section {
  icon: ReactElement
  path: string
}
