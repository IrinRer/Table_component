import { configureStore } from '@reduxjs/toolkit';
import DataReducer from './data/slice';
import TypeReducer from './type/slice';
import StatusReducer from './status/slice';

import { IDataSlice } from './data/types';
import { ITypeSlice } from './type/types';
import { IStatusSlice } from './status/types';

export const store = configureStore({
  reducer: { 
    data: DataReducer, 
    type: TypeReducer,
    status: StatusReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
  data: IDataSlice;
  type: ITypeSlice;
  status: IStatusSlice
};

export type AppDispatch = typeof store.dispatch;
