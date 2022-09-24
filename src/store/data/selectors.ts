import { RootState } from 'store';

export const getData = (state: RootState) => state.data.data;
export const getName = (state: RootState) => state.data.data.map((item) => item.name);