// Context
import { AuthContextProvider } from 'context/auth'

// Components
import { Layout } from '#lib/layout'

// Styles
import 'styles/globals.css'

// Types
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthContextProvider>
	)
}
