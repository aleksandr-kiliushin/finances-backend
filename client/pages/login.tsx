import { useMutation } from '@apollo/client'
import React, { SyntheticEvent, useState } from 'react'

// gql
import { ILoginData, ILoginVars, LOGIN } from '#gql/login.mutation'

export default function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const [login, { data: loginData }] = useMutation<ILoginData, ILoginVars>(LOGIN)

	const onSubmit = async (e: SyntheticEvent) => {
		e.preventDefault()

		try {
			const { data: loginData } = await login({ variables: { password, username } })

			const { login: token } = loginData

			localStorage.setItem('authToken', token)
		} catch {
			alert('invalid username or password')
		}
	}

	return (
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
	)
}
