import { useContext } from 'react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'

// Context
import { DispatchContext, StateContext } from '#context/state'

// Components
import { Form } from '#components/lib/form-constructor/form'
import { FormRow } from '#components/lib/form-constructor/form-row'
import { HookFormInput } from '#components/lib/form-constructor/input'
import { Button } from '#components/lib/button'

// Utils
import { useLogin } from '#utils/hooks'

// Styles
import s from './index.module.css'

export default function Login() {
	const { register, handleSubmit } = useForm<IFormValues>()

	const { push } = useRouter()

	const { authToken } = useContext(StateContext)
	const asyncDispatch = useContext(DispatchContext)

	const { logIn } = useLogin()

	const logOut = () =>
		asyncDispatch({
			payload: {
				authToken: '',
			},
			type: 'auth/setUserData',
		})

	const onSubmit: SubmitHandler<IFormValues> = async ({ password, username }) => {
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

			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormRow label="Username">
					<HookFormInput {...register('username', { required: true })} />
				</FormRow>

				<FormRow label="Password">
					<HookFormInput type="password" {...register('password', { required: true })} />
				</FormRow>

				<Button type="submit">Log in</Button>
			</Form>
		</div>
	)
}

interface IFormValues {
	password: string
	username: string
}
