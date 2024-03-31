import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import headPhoneReducer from './slices/headphoneSlice';

const logger = createLogger({ collapsed: true });

export const store = configureStore({
  reducer: {
    headPhoneList: headPhoneReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

console.log(store.getState());

export const reduxUnsubscribe = store.subscribe(() => console.log(store.getState()));
