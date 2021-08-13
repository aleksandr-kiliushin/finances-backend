import React from 'react'

// graphql
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// components
import { Layout } from 'components/layout'

// styles
import 'styles/globals.css'

// types
import type { AppProps } from 'next/app'

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
})

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
