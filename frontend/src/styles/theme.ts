import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    // background: {
    //   default: '#fff3e4',
    //   paper: '#eed6c4',
    // },
  },
  typography: {
    allVariants: {
      fontFamily: 'monospace',
      lineHeight: '1',
    },
    h1: {
      fontSize: '3.6rem',
    },
    h2: {
      fontSize: '3rem',
    },
    h3: {
      fontSize: '2.4rem',
    },
    h4: {
      fontSize: '1.8rem',
    },
  },
})

export default theme
