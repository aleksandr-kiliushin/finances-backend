import { CustomApolloProvider } from '#models/apollo-provider'

// Components
import { Layout } from '#components/lib/layout'

// Styles
import 'src/styles/globals.css'
import 'src/styles/vars.css'

// Types
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CustomApolloProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CustomApolloProvider>
	)
}
