import { AxiosError } from 'axios';

export const DATA_SLICE_ALIAS = 'data';

export interface IDataItem {
  id: number;
  name: string;
  status: string;
  type: string;
  conditions: string;
  volume: number;
  roi: number;
  free: number;
  hedge: number;
}

export interface IDataSlice {
  data: Array<IDataItem>;
  dataFilter: Array<IDataItem>;
  filter: string;
  loading: boolean;
  error: AxiosError | null;
}
