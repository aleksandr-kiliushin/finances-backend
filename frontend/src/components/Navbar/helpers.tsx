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

interface Section {
  icon: ReactElement
  path: string
}
