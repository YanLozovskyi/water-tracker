import { createSelector } from 'reselect';

export const selectWaterToday = state => state.waterData.today;
export const selectMonthData = state => state.waterData.month;

export const selectDailyNormFulfillment = state =>
  state.waterData.today.dailyNormFulfillment;

export const selectWaterRate = state => state.auth.user.waterRate;

export const selectWaterVolumePercentage = createSelector(
  [selectDailyNormFulfillment, selectWaterRate],
  (dailyNormFulfillment, waterRate) => {
    return Math.round((100 * dailyNormFulfillment) / waterRate);
  },
);
