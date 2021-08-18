import { gql } from '@apollo/client'

// types
import { IUser } from '#interfaces/user'

export const LOGIN = gql`
	mutation ($password: String!, $username: String!) {
		login(loginInput: { password: $password, username: $username }) {
			authToken
		}
	}
`

export interface ILoginData {
	login: {
		authToken: string
	}
}

export interface ILoginVars {
	password: IUser['password']
	username: IUser['username']
}
