/** @jest-environment jsdom */

import React from 'react'
import { act, fireEvent, render, screen } from '#utils/test-utils'

// Components
import { Login } from '#views/login'

describe('<Login />', () => {
	test('"Log in" button is rendered and the "disabled" attribute works correctly.', async () => {
		render(<Login />)

		const loginButton = screen.getByRole('button', { name: 'Log in' })

		expect(loginButton).toBeInTheDocument()
		expect(loginButton).toBeDisabled()

		await act(async () => {
			fireEvent.input(await screen.findByLabelText('Username'), { target: { value: 'john_doe' } })
			fireEvent.input(await screen.findByLabelText('Password'), { target: { value: 's3cret' } })
		})

		expect(loginButton).toBeEnabled()
	})
})
