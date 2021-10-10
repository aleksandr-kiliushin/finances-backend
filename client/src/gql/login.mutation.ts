import { gql, useMutation } from '@apollo/client'

// Types
import { IUser } from '#interfaces/user'

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

interface ILoginVars {
	password: IUser['password']
	username: IUser['username']
}

export const useLoginMutation = () => useMutation<ILoginData, ILoginVars>(LOGIN)
