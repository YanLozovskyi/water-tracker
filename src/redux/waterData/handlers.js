export const handlerAddWater = (
  state,
  { payload: { _id, waterVolume, date, owner } },
) => {
  state.today.dailyWaterList.push({ _id, waterVolume, date, owner });
};

export const handleEditWater = (state, { payload }) => {
  const array = state.today.dailyWaterList;
  const idx = array.findIndex(item => item._id === payload._id);

  if (idx !== -1) {
    array[idx] = payload;
  }
};

export const handlerDeleteWater = (state, { payload }) => {
  state.today.dailyWaterList = state.today.dailyWaterList.filter(
    data => data._id !== payload,
  );
};
