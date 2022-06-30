import { render } from '@testing-library/react'
import { Input } from '../../components'
import userEvent from '@testing-library/user-event'
import { useState as useStateMock } from 'react'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

describe('Input', () => {
  const setState = jest.fn()

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState])
  })

  it('should render a input', async () => {
    const setState = jest.fn()

    const {
      getByTestId
    } = render(
      <Input 
        id="email-address" 
        name="email" 
        type="email" 
        label="Email address"
        required
        onChange={setState}
        placeholder="Email address"
        data-testid="email-address"
        autoComplete="email" 
      />
    )

    const target = getByTestId('email-address');

    await userEvent.type(target, 'Hello world')

    expect(target).toHaveAttribute('placeholder', 'Email address');
    expect(setState).toHaveBeenCalledTimes(10)
  })
})