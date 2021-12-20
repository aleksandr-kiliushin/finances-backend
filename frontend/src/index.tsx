import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Global } from '@emotion/react'

import { store } from '#models/store'
import { App } from './views'
import globalStyles from './global-styles'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Global styles={globalStyles} />
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.querySelector('#root'),
)
