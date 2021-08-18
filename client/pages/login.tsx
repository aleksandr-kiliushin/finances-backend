import { useMutation } from '@apollo/client'
import { SyntheticEvent, useState } from 'react'

// gql
import { ILoginData, ILoginVars, LOGIN } from '#gql/login.mutation'

export default function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const [login, { data: loginData }] = useMutation<ILoginData, ILoginVars>(LOGIN)

	const onSubmit = async (e: SyntheticEvent) => {
		e.preventDefault()

		try {
			await login({ variables: { password, username } })

			if (!loginData) {
				throw new Error('authorization failed')
			}

			const { authToken } = loginData.login

			localStorage.setItem('authToken', authToken)

			alert('logged in')
		} catch {
			alert('invalid username or password')
		}
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

				<input type="submit" />
			</form>

			<h1>logout</h1>
			<button
				onClick={() => {
					localStorage.removeItem('authToken')
					alert('logged out')
				}}
			>
				log out
			</button>
		</>
	)
}
