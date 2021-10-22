/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'

// Components
import { Button } from '#components/Button'

it('console.log button data', () => {
	const { queryByLabelText, getByLabelText } = render(<Button>Click me</Button>)

	console.log(queryByLabelText('Click me'))

	// expect(queryByLabelText(/off/i)).toBeTruthy()

	// fireEvent.click(getByLabelText(/off/i))

	// expect(queryByLabelText(/on/i)).toBeTruthy()
})

export default {}
