import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FirstState {
  value: number; 
}

const initialState: FirstState = {
  value: 0,
};

const firstSlice = createSlice({
  name: 'firstSlice', 
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = firstSlice.actions;
export default firstSlice.reducer;