/** @jest-environment jsdom */

import React from 'react'
import userEvent from '@testing-library/user-event'

// Components
import { Login } from '#views/login'

// Utils
import { act, render, screen } from '#utils/test-utils'

describe('<Login />', () => {
	test('"Log in" button is rendered and the "disabled" attribute works correctly.', async () => {
		render(<Login />)

		const loginButton = screen.getByRole('button', { name: 'Log in' })

		expect(loginButton).toBeInTheDocument()
		expect(loginButton).toBeDisabled()

		await act(async () => {
			userEvent.type(await screen.findByLabelText('Username'), 'john_doe')
			userEvent.type(await screen.findByLabelText('Password'), 's3cret')
		})

		expect(loginButton).toBeEnabled()
	})
})
