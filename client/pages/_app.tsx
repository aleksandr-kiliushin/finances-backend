// Context
import { AuthContext } from 'context/auth'

// Components
import { Layout } from '#lib/layout'

// Styles
import 'styles/globals.css'

// Types
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthContext>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthContext>
	)
}
