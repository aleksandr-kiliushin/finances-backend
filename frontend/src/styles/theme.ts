import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    text: {
      primary: '#483434',
      secondary: '#6b4f4f',
    },
    background: {
      default: '#fff3e4',
      paper: '#eed6c4',
    },
  },
})

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string
//     }
//   }
//   interface ThemeOptions {
//     status?: {
//       danger?: string
//     }
//   }
// }

export default theme
