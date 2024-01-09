import { initialState } from './authSlice';

export const handleRegister = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLogout = () => initialState;

export const handleDeleteUser = () => initialState;

export const handleRefreshFulfield = (state, { payload }) => {
  state.user = payload;
  state.isRefreshing = false;
  state.isLoggedIn = true;
};

export const handleRefreshPending = state => {
  state.isRefreshing = true;
};

export const handleRefreshReject = state => {
  state.isRefreshing = false;
};

export const handleReqPass = () => initialState;

export const handleResPass = () => initialState;

export const handlerUpdateWaterRate = (state, { payload }) => {
  state.user.waterRate = payload;
};

export const handlerUpdateAvatar = (state, { payload }) => {
  state.user.avatarURL = payload;
};

export const handlerEditUserInfo = (state, { payload }) => {
  state.user = { ...state.user, ...payload };
};
