/** @jest-environment jsdom */

import React from 'react'
import { render, screen } from '#utils/test-utils'

// Components
import { Login } from '#views/login'

describe('<Login />', () => {
	test('"Log in" button is rendered.', () => {
		render(<Login />)

		expect(screen.getByRole('button')).toBeInTheDocument()
	})
})
