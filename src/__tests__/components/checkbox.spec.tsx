import { render } from '@testing-library/react'
import { Checkbox } from '../../components'
import userEvent from '@testing-library/user-event'

describe('Checkbox', () => {
  it('should execute the checked state when click in a checkbox', async () => {
    const {
      getByTestId,
    } = render(<Checkbox id="remember-me" name="remember-me" data-testid="remember-me" label="Remember me" />)

    const checkbox = getByTestId('remember-me');

    await userEvent.click(checkbox)

    expect(checkbox).toHaveFocus()
  })
})