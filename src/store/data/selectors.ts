import { RootState } from 'store';

export const getData = (state: RootState) => state.data.dataFilter;
export const getStatus = (state: RootState) =>
  state.data.data.map((item) => item.status);
