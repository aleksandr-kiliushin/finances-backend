import { CustomApolloProvider } from '#context/apollo'

// Context
import { AuthContextProvider } from '#context/auth'

// Components
import { Layout } from '#components/lib/layout'

// Styles
import 'src/styles/globals.css'
import 'src/styles/vars.css'

// Types
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthContextProvider>
			<CustomApolloProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CustomApolloProvider>
		</AuthContextProvider>
	)
}
