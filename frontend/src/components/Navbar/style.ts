import { SxProps, Theme } from '@mui/material/styles'

import Color from '#styles/colors'

export const bottomNavigationSx: SxProps<Theme> = {
  height: '60px',
  boxShadow: `0px -30px 30px ${Color.Secondary}20`,
  backgroundColor: Color.Theme,
}

export const bottomNavigationActionSx: SxProps<Theme> = {
  maxWidth: '100%',
  padding: '8px',
  '& .MuiSvgIcon-root': {
    height: '1.5rem',
    width: '1.5rem',
    fill: Color.Secondary,
    transition: 'height 0.2s linear, width 0.2s linear, fill 0.2s linear',
  },
  '&.Mui-selected .MuiSvgIcon-root': {
    height: '2.2rem',
    width: '2.2rem',
    fill: Color.Primary,
  },
  '&:hover .MuiSvgIcon-root': {
    fill: Color.Primary,
    transition: 'fill 0.2s linear',
  },
}
