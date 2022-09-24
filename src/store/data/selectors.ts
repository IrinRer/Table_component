import { RootState } from 'store';

export const getData = (state: RootState) => state.data.dataFilter;
export const getBuyId = (state: RootState) =>
  state.data.buy.map((item) => item.id).join();
