import { RootState } from 'store';

export const getType = (state: RootState) => state.type.type;
