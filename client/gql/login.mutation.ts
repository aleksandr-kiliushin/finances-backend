import { gql } from '@apollo/client'

// types
import { IUser } from '#interfaces/user'

export const LOGIN = gql`
	mutation ($password: String!, $username: String!) {
		login(loginInput: { password: $password, username: $username })
	}
`

export interface ILoginData {
	login: { login: string }
}

export interface ILoginVars {
	password: IUser['password']
	username: IUser['username']
}
