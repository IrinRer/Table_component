import { configureStore } from '@reduxjs/toolkit';
import DataReducer from './data/slice';
import TypeReducer from './type/slice';

import { IDataSlice } from './data/types';
import { ITypeSlice } from './type/types';

export const store = configureStore({
  reducer: { 
    data: DataReducer, 
    type: TypeReducer 
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
  data: IDataSlice;
  type: ITypeSlice
};

export type AppDispatch = typeof store.dispatch;
