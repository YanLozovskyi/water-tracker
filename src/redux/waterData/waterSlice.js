import { createSlice } from '@reduxjs/toolkit';
import {
  handleEditWater,
  handlerAddWater,
  handlerDeleteWater,
} from './handlers';
import {
  addWatersThunk,
  deleteWaterThunk,
  editWaterThunk,
} from './waterOperations';

const initialState = {
  month: [],
  today: {
    dailyWaterList: [],
    dailyNormFulfillment: 0,
  },
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addWatersThunk.fulfilled, handlerAddWater)
      .addCase(editWaterThunk.fulfilled, handleEditWater)
      .addCase(deleteWaterThunk.fulfilled, handlerDeleteWater);
  },
});

export const waterReducer = waterSlice.reducer;
