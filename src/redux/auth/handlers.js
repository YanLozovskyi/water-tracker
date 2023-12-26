import { initialState } from './authSlice';

export const handleRegister = (state, { payload }) => {
  state.user = payload;
};

export const handleLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLogout = state => {
  state = initialState;
};

// export const handleLogout = () => initialState;

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

export const handlerUpdateAvatar = (state, { payload }) => {
  state.user.avatarURL = payload;
};

export const handlerEditUserInfo = (state, { payload }) => {
  state.user = payload;
};
