import { CustomApolloProvider } from '#context/apollo'

// Context
import { ReducerProvider } from '#context/state'

// Components
import { Layout } from '#components/lib/layout'

// Styles
import 'src/styles/globals.css'
import 'src/styles/vars.css'

// Types
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ReducerProvider>
			<CustomApolloProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CustomApolloProvider>
		</ReducerProvider>
	)
}
