import { createSlice } from '@reduxjs/toolkit';
const savedTheme = localStorage.getItem('theme');

const themeSlice = createSlice({
  name: 'theme',
  initialState: savedTheme || 'light',
  reducers: {
    toggleTheme: state => {
      return state === 'light' ? 'dark' : 'light';
    },
    setLightTheme: () => {
      return 'light';
    },
  },
});

export const { toggleTheme, setLightTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
