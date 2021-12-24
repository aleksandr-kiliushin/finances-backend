import { SxProps, Theme } from '@mui/material/styles'

export const bottomNavigationSx: SxProps<Theme> = ({ palette }) => ({
  height: '60px',
  boxShadow: `0px -30px 30px ${palette.background.paper}40`,
  backgroundColor: palette.background.paper,
  borderTop: `1px solid ${palette.text.primary}`,
})

export const bottomNavigationActionSx: SxProps<Theme> = ({ palette }) => ({
  maxWidth: '100%',
  padding: '8px',
  '& .MuiSvgIcon-root': {
    height: '1.5rem',
    width: '1.5rem',
    fill: palette.text.secondary,
    transition: 'height 0.2s linear, width 0.2s linear, fill 0.2s linear',
  },
  '&.Mui-selected .MuiSvgIcon-root': {
    height: '2.2rem',
    width: '2.2rem',
    fill: palette.text.primary,
  },
  '&:hover .MuiSvgIcon-root': {
    fill: palette.text.primary,
    transition: 'fill 0.2s linear',
  },
})

// const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
//   color: theme.status.danger,
//   '&.Mui-checked': {
//     color: theme.status.danger,
//   },
// }));
