import { gql, MutationHookOptions, useMutation } from '@apollo/client'
import { useApolloClient } from '@apollo/client'

// Types
import { IUser } from '#interfaces/user'
import { useRouter } from 'next/router'

const LOGIN = gql`
	mutation ($password: String!, $username: String!) {
		login(loginInput: { password: $password, username: $username }) {
			authToken
		}
	}
`

interface ILoginData {
	login: {
		authToken: string
	}
}

type ILoginVars = Omit<IUser, 'id'>

export const useLoginMutation = (options?: MutationHookOptions<ILoginData, ILoginVars>) => {
	const { push } = useRouter()

	const client = useApolloClient()

	return useMutation<ILoginData, ILoginVars>(LOGIN, {
		onError() {
			alert('Login error.')
		},
		async onCompleted({ login: { authToken } }) {
			if (authToken) {
				localStorage.authToken = authToken

				await client.cache.reset()

				push('/')
			}
		},

		...options,
	})
}
