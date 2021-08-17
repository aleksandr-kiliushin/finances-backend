import React from 'react'
import { ApolloProvider } from '@apollo/client'

// config
import { client } from '#gql/config'

// components
import { Layout } from '#lib/layout'

// styles
import 'styles/globals.css'

// types
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	)
}
export default MyApp
