import { useContext, useEffect } from 'react'

// GQL
import { useLoginMutation } from '#gql/login.mutation'

// Context
import { DispatchContext } from '#context/state'

export const useLogin = () => {
	const [logIn, { data: loginData }] = useLoginMutation()

	const asyncDispatch = useContext(DispatchContext)

	useEffect(() => {
		if (loginData?.login.authToken) {
			asyncDispatch({
				payload: {
					authToken: loginData.login.authToken,
				},
				type: 'auth/setUserData',
			})
		}
	}, [loginData])

	return { logIn }
}
