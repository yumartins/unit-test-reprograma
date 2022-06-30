import { render } from '@testing-library/react'
import { Select } from '../../components'

describe('Select', () => {
  it('should render a select with options.', async () => {
    const {
      container,
    } = render(
      <Select 
        label="Select option"
        options={[
          'Araguari',
          'Uberlândia',
          'Minas Gerais'
        ]}
        data-testid="select"
      />
    )

    const target = container.querySelectorAll('option');

    expect(target.length).toBe(3);
  })
})