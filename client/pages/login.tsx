import React, { SyntheticEvent, useState } from 'react'

export default function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit = (e: SyntheticEvent) => {
		e.preventDefault()
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
