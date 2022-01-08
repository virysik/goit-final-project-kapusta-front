import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import dateReducer from './calendar/calendar-slice';

import { transactionApi } from '../services/rtk-transactions';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [thunk, transactionApi.middleware];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    calendar: dateReducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
