import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { waterReducer } from './waterData/waterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const waterPersistConfig = {
  key: 'waterData',
  storage,

  // whitelist: [],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    waterData: persistReducer(waterPersistConfig, waterReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
