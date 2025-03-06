import { configureStore } from '@reduxjs/toolkit';
import storesReducer from './storesSlice';

export const store = configureStore({
  reducer: {
    stores: storesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
