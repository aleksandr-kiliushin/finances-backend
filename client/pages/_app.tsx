import React, { useEffect, useState } from 'react'

// config
import { CustomApolloProvider } from 'config/apollo'

// components
import { Layout } from '#lib/layout'

// styles
import 'styles/globals.css'

// types
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [authToken, setAuthToken] = useState<string | null>(null)

	useEffect(() => {
		setAuthToken(localStorage.getItem('authToken'))
	}, [authToken])

	return (
		<CustomApolloProvider authToken={authToken}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CustomApolloProvider>
	)
}
export default MyApp
