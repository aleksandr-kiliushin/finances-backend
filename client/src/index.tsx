import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// Models
// import { store } from './app/store'

// Components
import { App } from './App'

// Styles
import './styles/index.css'
import './styles/vars.css'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <Provider store={store}> */}
			<App />
			{/* </Provider> */}
		</BrowserRouter>
	</React.StrictMode>,
	document.querySelector('#root'),
)
