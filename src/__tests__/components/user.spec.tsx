import { User } from '../../components'
import { render, waitFor } from '@testing-library/react';

describe('User', () => {
  it('Gets the data', async () => {
    const {
      findByRole,
    } = render(<User />);
  
    const user = await waitFor(() => findByRole('contentinfo'));
  
    expect(user).toHaveTextContent('Name is John Maverick');
  })
});