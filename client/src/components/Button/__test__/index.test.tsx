/**
 * @jest-environment jsdom
 */

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

// Components
import { Button } from '#components/Button'

describe('<Button/> component.', () => {
	test('Passes text to <Button/> children.', () => {
		const buttonChildren = 'Button text'

		render(<Button>{buttonChildren}</Button>)

		expect(screen.getByText(buttonChildren)).toBeDefined()
	})

	test('onClick callback gets called when a click happens.', () => {
		const buttonCallback = jest.fn()

		render(<Button onClick={buttonCallback}>Click me</Button>)
		fireEvent.click(screen.getByRole('button'))

		expect(buttonCallback).toBeCalledTimes(1)
	})
})
