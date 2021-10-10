import { SyntheticEvent, useContext, useState } from 'react'
import { useRouter } from 'next/router'

// gql
import { authContext, useAuth } from '#context/auth'

export default function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const { push } = useRouter()

	const { authToken } = useContext(authContext)

	const { logIn, logOut } = useAuth()

	const onSubmit = async (e: SyntheticEvent) => {
		e.preventDefault()

		try {
			const response = await logIn({ variables: { password, username } })

			if (!response.data?.login.authToken) {
				throw new Error()
			}

			push('/')
		} catch {
			alert('login failed')
		}
	}

	if (authToken) {
		return (
			<>
				<h1>logout</h1>
				<button onClick={logOut}>log out</button>
			</>
		)
	}

	return (
		<>
			<h1>login</h1>
			<form onSubmit={onSubmit}>
				<label>
					username
					<input onChange={e => setUsername(e.target.value)} type="text" value={username} />
				</label>

				<label>
					password
					<input onChange={e => setPassword(e.target.value)} type="password" value={password} />
				</label>

				<button type="submit">log in</button>
			</form>
		</>
	)
}
