import axios from 'axios';

axios.defaults.baseURL = 'https://watertracker-backend.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Auth

export const signup = async body => {
  const { data } = await axios.post('/auth/register', body);
  token.set(data.token);
  return data;
};

export const signin = async body => {
  const { data } = await axios.post('/auth/login', body);
  token.set(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await axios.post('/auth/logout');
  token.unset();
};

// User

export const updateAvatar = async newPhotoFile => {
  const {
    data: { avatarURL },
  } = await axios.patch('/users/avatars', newPhotoFile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return avatarURL;
};
