/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'

// Components
import { Button } from '#components/Button'

test('Passes text to <Button/> children.', () => {
	const buttonChildren = 'Button text'

	render(<Button>{buttonChildren}</Button>)

	expect(screen.getByText(buttonChildren)).toBeDefined()
})

export default {}
