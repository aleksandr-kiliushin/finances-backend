import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Global } from '@emotion/react'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

import App from '#views'
import globalStyles from '#styles/global'
import store from '#models/store'
import theme from '#styles/theme'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.querySelector('#root'),
)
