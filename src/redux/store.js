import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import transReducer from './transactions/transactions-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      ignoredActionPaths: [
        'payload.config.adapter',
        `payload.config.transformRequest.0`,
        `payload.config.transformResponse.0`,
        `payload.config.validateStatus`,
        `payload.request`,
      ],
    },
  }),
  // logger,
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
