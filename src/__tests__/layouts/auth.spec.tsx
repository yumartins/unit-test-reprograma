import { render } from '@testing-library/react'
import { AuthLayout } from '../../layouts'
import userEvent from '@testing-library/user-event'

describe('Auth.', () => {
  it('should find inputs and submit button.', async () => {
    const {
      getByText,
      getByPlaceholderText,
    } = render(
      <AuthLayout 
        title="Sign in to your account"
        description="start your 14-day free trial"
      />
    )

    const checkAttributes = (field: string) => {
      const target = getByPlaceholderText(field);

      expect(target).toBeTruthy();
      expect(target).toHaveAttribute('required', '');
    }

    checkAttributes('Password');
    checkAttributes('Email address');
    expect(getByText('Sign in')).toHaveAttribute('type', 'submit');
  })

  it('should execute form and retrieve user data.', async () => {
    const {
      getByText,
      findByText,
      getByPlaceholderText,
    } = render(
      <AuthLayout 
        title="Sign in to your account"
        description="start your 14-day free trial"
      />
    )

    const typeInput = async (field: string, message: string) => {
      const target = getByPlaceholderText(field);

      await userEvent.type(target, message);
    }

    await typeInput('Password', '123456');
    await typeInput('Email address', 'hello@reprograma.com.br');

    await userEvent.click(getByText('Sign in'));

    const userField = await findByText('hello@reprograma.com.br');

    expect(userField).toBeTruthy();
  })
})