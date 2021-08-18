import { useRouter } from 'next/router'

// config
import { CustomApolloProvider } from 'config/apollo'

// components
import { Layout } from '#lib/layout'

// styles
import 'styles/globals.css'

// types
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
	const { pathname, push } = useRouter()

	useEffect(() => {
		if (!localStorage.getItem('authToken') && pathname !== '/login') {
			push('/login')
		}
	}, [pathname, push])

	return (
		<CustomApolloProvider /* authToken={authToken}*/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CustomApolloProvider>
	)
}
