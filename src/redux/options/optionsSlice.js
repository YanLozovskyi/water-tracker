import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
  name: 'options',
  initialState: { theme: 'light' },
  reducers: {
    set: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { set } = optionsSlice.actions;
export const optionsReducer = optionsSlice.reducer;
