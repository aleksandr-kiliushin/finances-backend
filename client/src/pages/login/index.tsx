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

	const onSubmit = async () => {
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

				<Button background="red" onClick={logOut}>
					Log out
				</Button>
			</div>
		)
	}

	return (
		<div className={s.Container}>
			<h1 className={s.Centered}>Welcome</h1>
			<label>
				Username
				<input onChange={(e) => setUsername(e.target.value)} type="text" value={username} />
			</label>

			<label>
				Password
				<input onChange={(e) => setPassword(e.target.value)} type="password" value={password} />
			</label>

			<Button onClick={onSubmit}>Log in</Button>
		</div>
	)
}
