export const handleAuth = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLogout = state => {
  state.user = {};
  state.token = null;
  state.isLoggedIn = false;
};

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
