import { render } from '@testing-library/react'
import { Button } from '../../components'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
  it('should render a button', () => {
    const {
      getByTestId
    } = render(<Button data-testid="button">Hello reprograma</Button>)

    expect(getByTestId('button').textContent).toBe('Hello reprograma')
  })

  it('should execute the function when click in a button', async () => {
    const click = jest.fn();

    const {
      getByTestId
    } = render(<Button data-testid="button" onClick={click}>Hello reprograma</Button>)

    await userEvent.click(getByTestId('button'))

    expect(click).toHaveBeenCalledTimes(1)
  })
})