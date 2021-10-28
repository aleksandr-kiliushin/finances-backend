/** @jest-environment jsdom */

import React from 'react'
import userEvent from '@testing-library/user-event'

// Components
import { Login } from '#views/login'

// Utils
import { act, render, screen } from '#utils/test-utils'

test('<Login />', async () => {
	render(<Login />)

	const logInButton = screen.getByRole('button', { name: 'Log in' })

	expect(logInButton).toBeInTheDocument()
	expect(logInButton).toBeDisabled()

	await act(async () => {
		userEvent.type(await screen.findByLabelText('Username'), 'john_doe')
		userEvent.type(await screen.findByLabelText('Password'), 's3cret')
	})

	expect(logInButton).toBeEnabled()

	fetchMock.mockResponses(
		[JSON.stringify({ authToken: 'authToken12345' }), { status: 201 }],
		[JSON.stringify({ id: 3, username: 'sasha' }), { status: 200 }],
	)
	/* The same. */
	// fetchMock
	// 	.mockResponseOnce(JSON.stringify({ authToken: 'authToken12345' }))
	// 	.mockResponseOnce(JSON.stringify({ id: 3, username: 'sasha' }))

	await act(async () => {
		await userEvent.click(logInButton)
	})

	expect(logInButton).not.toBeInTheDocument()

	const logOutButton = screen.getByRole('button', { name: 'Log out' })
	const youAreLoggedInParagraph = screen.getByText(
		(_, node) => node?.textContent === 'You are logged in as sasha.',
	)

	expect(logOutButton).toBeInTheDocument()
	expect(youAreLoggedInParagraph).toBeInTheDocument()
})
