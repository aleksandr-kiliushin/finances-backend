import { SyntheticEvent, useContext, useState } from 'react'
import { useRouter } from 'next/router'

// GQL
import { authContext, useAuth } from '#context/auth' //To do: change to AuthContext.

// Components
import { Button } from '#components/lib/button'

// Styles
import s from './index.module.css'

export default function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const { push } = useRouter()

	const { authToken } = useContext(authContext)

	const { logIn, logOut } = useAuth()

	const onSubmit = async (e: SyntheticEvent) => {
		e.preventDefault()

		try {
			const { data } = await logIn({ variables: { password, username } })

			if (!data?.login.authToken) {
				throw new Error()
			}

			push('/')
		} catch {
			alert('Login failed.')
		}
	}

	if (authToken) {
		return (
			<div className={s.Container}>
				<p className={s.Centered}>
					You are logged in as <strong>sasha</strong>.
				</p>

				<Button backgroundColor="red" onClick={logOut}>
					Log out
				</Button>
			</div>
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
