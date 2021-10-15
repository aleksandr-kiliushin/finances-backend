import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// Models
// import { store } from './app/store'

// Components
import { View } from './views'

// Styles
import './styles/index.css'
import './styles/vars.css'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <Provider store={store}> */}
			<View />
			{/* </Provider> */}
		</BrowserRouter>
	</React.StrictMode>,
	document.querySelector('#root'),
)
