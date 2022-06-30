import { waitFor, renderHook } from '@testing-library/react';

import { useAPI } from '../../hooks';

describe('useAPI', () => {
  it('should execute API.', async () => {
    const { 
      result,
    } = renderHook(() => useAPI());
  
    await waitFor(() => {
      expect(result.current).toEqual({ 
        lastName: 'Maverick',
        firstName: 'John',
      });
    })
  });
})