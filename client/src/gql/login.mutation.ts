import { gql, useMutation } from '@apollo/client'

// types
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

export const loginMutation = () => useMutation<ILoginData, ILoginVars>(LOGIN)
