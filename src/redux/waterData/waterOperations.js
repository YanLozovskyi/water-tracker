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
  async ({ _id, waterVolume, date }, { rejectWithValue }) => {
    try {
      const newWaterUser = { waterVolume, date };
      const response = await editWater({ newWaterUser, id: _id });
      return response;
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
