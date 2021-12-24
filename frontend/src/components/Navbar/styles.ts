import { SxProps, Theme } from '@mui/material/styles'

export const bottomNavigationSx: SxProps<Theme> = ({ palette }) => ({
  height: '60px',
  boxShadow: `0px -30px 30px ${palette.primary.light}10`,
  backgroundColor: palette.background.default,
  borderTop: `1px solid ${palette.primary.light}`,
})

export const bottomNavigationActionSx: SxProps<Theme> = ({ palette }) => ({
  maxWidth: '100%',
  padding: '8px',
  '& .MuiSvgIcon-root': {
    height: '1.5rem',
    width: '1.5rem',
    fill: palette.primary.light,
    transition: 'height 0.2s linear, width 0.2s linear, fill 0.2s linear',
  },
  '&.Mui-selected .MuiSvgIcon-root': {
    height: '2.2rem',
    width: '2.2rem',
    fill: palette.primary.dark,
  },
  '&:hover .MuiSvgIcon-root': {
    fill: palette.primary.dark,
    transition: 'fill 0.2s linear',
  },
})
