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
      .addCase(reqPassThunk.fulfilled, handleReqPass);
  },
});

export const authReducer = authSlice.reducer;
