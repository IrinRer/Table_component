import { AxiosError } from 'axios';

export const TYPES_SLICE_ALIAS = 'types';

export interface ITypeSlice {
  type: Array<string>,
  loading: boolean;
  error: AxiosError | null;
}
