import { createAsyncThunk } from '@reduxjs/toolkit';
import { addWaters, deleteWater, editWater } from '../Api/api';

export const addWatersThunk = createAsyncThunk(
  'water/addWater',
  async (newWater, { rejectWithValue }) => {
    try {
      const data = await addWaters(newWater);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const editWaterThunk = createAsyncThunk(
  'water/editWater',
  async (body, { rejectWithValue }) => {
    try {
      const data = await editWater(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteWaterThunk = createAsyncThunk(
  'water/deleteWater',
  async (id, { rejectWithValue }) => {
    try {
      deleteWater(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
