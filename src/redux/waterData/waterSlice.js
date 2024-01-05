import { createSlice } from '@reduxjs/toolkit';
import {
  handleEditWater,
  handleGetMonthWater,
  handleGetTodayWater,
  handlerAddWater,
  handlerDeleteWater,
} from './handlers';
import {
  addWatersThunk,
  deleteWaterThunk,
  editWaterThunk,
  getMonthWater,
  getTodayWater,
} from './waterOperations';

const initialState = {
  month: [],
  today: {
    dailyWaterList: [],
    dailyNormFulfillment: 0,
    waterVolumePercentage: 0,
  },
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addWatersThunk.fulfilled, handlerAddWater)
      .addCase(editWaterThunk.fulfilled, handleEditWater)
      .addCase(deleteWaterThunk.fulfilled, handlerDeleteWater)
      .addCase(getTodayWater.fulfilled, handleGetTodayWater)
      .addCase(getMonthWater.fulfilled, handleGetMonthWater);
  },
});

export const waterReducer = waterSlice.reducer;
