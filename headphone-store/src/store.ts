import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import headPhoneReducer from './slices/headphoneSlice';

// logger
const logger = createLogger({ collapsed: true });

// Store
// при configureStore<ReduxStoreToolkit> ошибка на middleware
export const store = configureStore({
  reducer: {
    headPhoneList: headPhoneReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

console.log(store.getState());

export const reduxUnsubscribe = store.subscribe(() => console.log(store.getState()));
