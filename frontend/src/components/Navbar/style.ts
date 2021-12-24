import { SxProps, Theme } from '@mui/material/styles'

import { Color } from '#src/style'

export const bottomNavigationSx: SxProps<Theme> = {
  height: '60px',
  boxShadow: `0px -30px 30px ${Color.Secondary}20`,
  backgroundColor: Color.Theme,
}

export const bottomNavigationActionSx: SxProps<Theme> = {
  maxWidth: 'revert',
  padding: '8px',
  '& .MuiSvgIcon-root': {
    height: '1.5rem',
    width: '1.5rem',
    fill: Color.Secondary,
  },
  '&.Mui-selected .MuiSvgIcon-root': {
    height: '2.2rem',
    width: '2.2rem',
    transition: 'height 0.2s, width 0.2s',
    fill: Color.Primary,
  },
  '&:hover': {
    '& .MuiSvgIcon-root': {
      fill: Color.Primary,
    },
  },
}
