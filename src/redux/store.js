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
import { rootReducer } from './root/rootSlice';
import { waterReducer } from './waterData/waterSlice';
import { optionsReducer } from './options/optionsSlice';

const PersistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const OptionsPersistConfig = {
  key: 'options',
  storage,
};

export const store = configureStore({
  reducer: {
    root: rootReducer,
    auth: persistReducer(PersistConfig, authReducer),
    waterData: waterReducer,
    options: persistReducer(OptionsPersistConfig, optionsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
