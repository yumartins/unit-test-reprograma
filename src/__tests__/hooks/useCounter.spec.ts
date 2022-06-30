import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../hooks';

describe('useCounter', () => {
  it('should increment', () => {
    const { 
      result 
    } = renderHook(() => useCounter());
  
    act(() => {
      result.current.increment();
    });
  
    expect(result.current.count).toBe(1);
  });
})