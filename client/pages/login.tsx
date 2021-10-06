import { SyntheticEvent, useContext, useState } from 'react'

// Context
import { AuthContext, useAuth } from 'context/auth'

export default function Login() {
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')

	const { authToken } = useContext(AuthContext)

	const { logIn, logOut } = useAuth()

	const onSubmit = (e: SyntheticEvent) => {
		e.preventDefault()

		logIn({ password, username })
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
					<input onChange={(e) => setUsername(e.target.value)} type="text" value={username} />
				</label>

				<label>
					password
					<input onChange={(e) => setPassword(e.target.value)} type="password" value={password} />
				</label>

				<button type="submit">log in</button>
			</form>
		</>
	)
}
