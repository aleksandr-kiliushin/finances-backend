import { useContext } from 'react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'

// GQL
import { authContext, useAuth } from '#context/auth' //To do: change to AuthContext.

// Components
import { Button } from '#components/lib/button'

// Styles
import s from './index.module.css'

export default function Login() {
	const { register, handleSubmit } = useForm<IInputs>()

	const { push } = useRouter()

	const { authToken } = useContext(authContext)

	const { logIn, logOut } = useAuth()

	const onSubmit: SubmitHandler<IInputs> = async ({ password, username }) => {
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

			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('username', { required: true })} />

				<input type="password" {...register('password', { required: true })} />

				<Button type="submit">Log in</Button>
			</form>
		</div>
	)
}

interface IInputs {
	password: string
	username: string
}
