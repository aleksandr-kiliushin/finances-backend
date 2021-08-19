import { CustomApolloProvider } from 'context/apollo'

// components
import { Layout } from '#lib/layout'

// styles
import 'styles/globals.css'

// types
import type { AppProps } from 'next/app'
import { AuthContext } from 'context/auth'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthContext>
			<CustomApolloProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CustomApolloProvider>
		</AuthContext>
	)
}
