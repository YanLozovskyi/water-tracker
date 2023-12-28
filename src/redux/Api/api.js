import axios from 'axios';

axios.defaults.baseURL = 'https://watertracker-backend.onrender.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Auth

export const signup = async body => {
  const { data } = await axios.post('/auth/register', body);
  setToken(data.token);
  return data;
};

export const signin = async body => {
  const { data } = await axios.post('/auth/login', body);
  setToken(data.token);
  return data;
};

export const logout = async () => {
  await axios.post('/auth/logout');
  unsetToken();
};

// User

export const refreshUser = async token => {
  console.log('api-token', token);
  setToken(token);
  const { data } = await axios.get('/user/current');
  return data;
};

export const updateAvatar = async newPhotoFile => {
  const {
    data: { avatarURL },
  } = await axios.post('/user/avatar', newPhotoFile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return avatarURL;
};

export const editUserInfo = async body => {
  const data = await axios.patch('/user/edit', body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};
