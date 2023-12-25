import { createSlice } from '@reduxjs/toolkit';
import {
  editUserInfoThunk,
  logInThunk,
  logOutThunk,
  refreshUserThunk,
  registerThunk,
  updateAvatarThunk,
} from './authOperations';
import {
  handleAuth,
  handleLogout,
  handleRefreshFulfield,
  handleRefreshPending,
  handleRefreshReject,
  handlerEditUserInfo,
  handlerUpdateAvatar,
} from './handlers';

const initialState = {
  user: {
    email: '',
    avatarURL: '',
    userName: '',
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
      .addCase(registerThunk.fulfilled, handleAuth)
      .addCase(logInThunk.fulfilled, handleAuth)
      .addCase(logOutThunk.fulfilled, handleLogout)
      .addCase(updateAvatarThunk.fulfilled, handlerUpdateAvatar)
      .addCase(refreshUserThunk.fulfilled, handleRefreshFulfield)
      .addCase(editUserInfoThunk.fulfilled, handlerEditUserInfo)
      .addCase(refreshUserThunk.pending, handleRefreshPending)
      .addCase(refreshUserThunk.rejected, handleRefreshReject);
  },
});

export const authReducer = authSlice.reducer;
