import { RootState } from 'store';

export const getStatus = (state: RootState) => state.status.status;
