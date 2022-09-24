import { configureStore } from '@reduxjs/toolkit';
import DataReducer from './data/slice';

import { IDataSlice } from './data/types';

export const store = configureStore({
  reducer: { data: DataReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
  data: IDataSlice;
};

export type AppDispatch = typeof store.dispatch;
