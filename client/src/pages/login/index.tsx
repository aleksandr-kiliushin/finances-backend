import { useForm, SubmitHandler } from 'react-hook-form'

// Fetching
import { useGetCurrentUserDataQuery } from '#models/fetching/get-current-user-data.query'
import { useIsUserLoggedInQuery } from '#models/fetching/is-user-logged-in.query'
import { useLoginMutation } from '#models/fetching/login.mutation'

// Components
import { Form } from '#components/lib/form-constructor/form'
import { FormRow } from '#components/lib/form-constructor/form-row'
import { HookFormInput } from '#components/lib/form-constructor/input'
import { Button } from '#components/lib/button'

// Styles
import s from './index.module.css'

export default function Login() {
	const { register, handleSubmit } = useForm<IFormValues>()

	const { data: isUserLoggedInData } = useIsUserLoggedInQuery()

	const { data: currentUserData } = useGetCurrentUserDataQuery({ fetchPolicy: 'no-cache' })

	const [logIn, { client }] = useLoginMutation()

	const logOut = () => {
		localStorage.authToken = ''

		client.resetStore()
	}

	const onSubmit: SubmitHandler<IFormValues> = ({ password, username }) => {
		logIn({ variables: { password, username } })
	}

	console.log(isUserLoggedInData?.isUserLoggedIn)

	if (isUserLoggedInData?.isUserLoggedIn) {
		return (
			<div className={s.Container}>
				<p className={s.Centered}>
					You are logged in as <strong>{currentUserData?.currentUserData.username}</strong>.
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
