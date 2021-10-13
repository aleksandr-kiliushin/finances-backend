import { isUserLoggedInVar } from '#models/cache'

export const useLogOut = () => {
	localStorage.authToken = ''

	isUserLoggedInVar(false)
}
