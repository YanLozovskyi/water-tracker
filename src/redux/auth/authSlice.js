import { createSlice } from '@reduxjs/toolkit';
import {
  editUserInfoThunk,
  logInThunk,
  logOutThunk,
  refreshUserThunk,
  registerThunk,
  updateAvatarThunk,
  updateWaterRateThunk,
  reqPassThunk,
  resPassThunk,
  deleteUserThunk,
} from './authOperations';
import {
  handleLogin,
  handleLogout,
  handleRefreshFulfield,
  handleRefreshPending,
  handleRefreshReject,
  handleRegister,
  handlerEditUserInfo,
  handlerUpdateAvatar,
  handlerUpdateWaterRate,
  handleReqPass,
  handleResPass,
  handleDeleteUser,
} from './handlers';

export const initialState = {
  user: {
    email: '',
    avatarURL: '',
    name: '',
    gender: '',
    waterRate: '',
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, handleRegister)
      .addCase(logInThunk.fulfilled, handleLogin)
      .addCase(logOutThunk.fulfilled, handleLogout)
      .addCase(updateWaterRateThunk.fulfilled, handlerUpdateWaterRate)
      .addCase(updateAvatarThunk.fulfilled, handlerUpdateAvatar)
      .addCase(editUserInfoThunk.fulfilled, handlerEditUserInfo)
      .addCase(refreshUserThunk.fulfilled, handleRefreshFulfield)
      .addCase(refreshUserThunk.pending, handleRefreshPending)
      .addCase(refreshUserThunk.rejected, handleRefreshReject)
      .addCase(reqPassThunk.fulfilled, handleReqPass)
      .addCase(resPassThunk.fulfilled, handleResPass)
      .addCase(deleteUserThunk.fulfilled, handleDeleteUser);
  },
});

export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
