import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'

// Models
// import { store } from './app/store'

// Components
import { App } from './App'

// Styles
import './styles/index.css'
import './styles/vars.css'

ReactDOM.render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
		<App />
		{/* </Provider> */}
	</React.StrictMode>,
	document.querySelector('#root'),
)
