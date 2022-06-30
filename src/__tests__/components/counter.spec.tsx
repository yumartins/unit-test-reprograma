import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { Counter } from '../../components';
import { createStore } from '../../store';

const Component: React.FC = () => (
  <Provider store={createStore()}>
    <Counter />
  </Provider>
)

describe('Counter', () => {
  it('should increment', async () => {
    const {
      getByText,
      getByRole,
    } = render(<Component />);
  
    const counter = getByRole('contentinfo');
    expect(counter).toHaveTextContent('0');
  
    const addButton = getByText(/Increment/i);
    await userEvent.click(addButton);
  
    expect(counter).toHaveTextContent('1');
  });
  
  it('should decrement', async () => {
    const {
      getByText,
      getByRole,
    } = render(<Component />);
  
    const counter = getByRole('contentinfo');
    expect(counter).toHaveTextContent('0');
  
    const addButton = getByText(/Decrement/i);
    await userEvent.click(addButton);

    expect(counter).toHaveTextContent('-1');
  })
})