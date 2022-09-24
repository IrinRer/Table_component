import { AxiosError } from 'axios';

export const STATUS_SLICE_ALIAS = 'status';

export interface IStatusSlice {
  status: Array<string>;
  loading: boolean;
  error: AxiosError | null;
}
