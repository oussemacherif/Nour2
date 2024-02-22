import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/bookSlice';

export const bookStore = () => {
  return configureStore({
    reducer: {
      booking: bookSlice,
     
    },
  });
};

export type AppStore = ReturnType<typeof bookStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];