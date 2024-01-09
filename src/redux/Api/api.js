import axios from 'axios';
import { formatDate } from '../../helpers/utils/dateUtils';

axios.defaults.baseURL = 'https://watertracker-backend.onrender.com/api';

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

export const requestPassword = async body => {
  const { data } = await axios.post('/auth/request-pass', body);
  return data;
};

export const resetPassword = async body => {
  const { data } = await axios.post('/auth/reset-pass', body);
  return data;
};

// User

export const updateWaterRate = async newWaterRate => {
  const { data } = await axios.patch('/waterrate', {
    waterRate: newWaterRate,
  });
  return data;
};

export const refreshUser = async token => {
  setToken(token);
  const { data } = await axios.get('/user/current');
  return data;
};

export const updateAvatar = async newPhotoFile => {
  const {
    data: { avatarURL },
  } = await axios.patch('/user/avatar', newPhotoFile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return avatarURL;
};

export const editUserInfo = async body => {
  const { data } = await axios.patch('/user/edit', body);
  return data;
};

export const deleteUser = async () => {
  await axios.delete('/user/delete-account');
  unsetToken();
};
// Water

export const addWaters = async newWater => {
  const { data } = await axios.post('/water', newWater, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const editWater = async ({ newWaterUser, id }) => {
  const { data } = await axios.patch(`/water/${id}`, newWaterUser, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const deleteWater = async id => {
  await axios.delete(`/water/${id}`);
};

export const fetchTodayWater = async () => {
  const date = formatDate(new Date());
  return await axios.get(`/today?date=${date}`);
};

export const fetchMonthWater = async ({ startDate, endDate }) => {
  return await axios.get(`/month?startDate=${startDate}&endDate=${endDate}`);
};
