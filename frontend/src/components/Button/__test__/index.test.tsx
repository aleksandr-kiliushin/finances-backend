/** @jest-environment jsdom */

import { fireEvent, render } from '@testing-library/react'

import { Button } from '#components/Button'

describe('<Button/> component.', () => {
  test('Passes text to <Button/> children.', () => {
    const buttonChildren = 'Button text'

    const { getByText } = render(<Button>{buttonChildren}</Button>)

    expect(getByText(buttonChildren)).toBeDefined()
  })

  test('onClick callback gets called when a click happens.', () => {
    const buttonCallback = jest.fn()

    const { getByRole } = render(<Button onClick={buttonCallback}>Click me</Button>)

    fireEvent.click(getByRole('button'))

    expect(buttonCallback).toBeCalledTimes(1)
  })
})
