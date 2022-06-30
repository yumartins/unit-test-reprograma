import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CounterState } from './types'

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.value += 1;
    },
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { 
  increment, 
  decrement, 
  incrementByAmount 
} = counterSlice.actions;

export const createStore = () =>
  configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;