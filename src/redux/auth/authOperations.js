import { createAsyncThunk } from '@reduxjs/toolkit';
import { logout, signin, signup } from '../Api/api';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await signup(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await signin(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logout();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
