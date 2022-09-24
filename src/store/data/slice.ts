import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DATA_SLICE_ALIAS, IDataSlice, IDataItem } from './types';
import { fetchDataAction } from './thunk';

const initialState: IDataSlice = {
  data: [],
  sortItem: '',
  dataFilter: [],
  buy: [],
  filterStatus: 'all',
  filterType: 'all',
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: DATA_SLICE_ALIAS,
  initialState,
  reducers: {
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;

      if (state.filterStatus === 'all') {
        state.dataFilter = state.data;
      } else if (state.filterType !== 'all') {
        state.dataFilter = state.data.filter(
          (item) =>
            item.status === action.payload && item.type === state.filterType,
        );
      } else {
        state.dataFilter = state.data.filter(
          (item) => item.status === action.payload,
        );
      }
    },
    setFilterType: (state, action) => {
      state.filterType = action.payload;

      if (state.filterType === 'all') {
        state.dataFilter = state.data;
      } else if (state.filterStatus !== 'all') {
        state.dataFilter = state.data.filter(
          (item) =>
            item.type === action.payload && item.status === state.filterStatus,
        );
      } else {
        state.dataFilter = state.data.filter(
          (item) => item.type === action.payload,
        );
      }
    },
    onSortUp: (state, action) => {
      state.dataFilter = state.dataFilter.sort(
        (a, b) => b[action.payload] - a[action.payload],
      );
      state.sortItem = action.payload;
    },
    onSortDown: (state, action) => {
      state.dataFilter = state.dataFilter.sort(
        (a, b) => a[action.payload] - b[action.payload],
      );
      state.sortItem = action.payload;
    },
    setBuy: (state, action) => {
      state.buy = state.buy.concat(
        state.data.filter((item) => item.id === action.payload),
      );
    },
  },
  extraReducers: {
    [fetchDataAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [fetchDataAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Array<IDataItem>>,
    ) => {
      state.data = payload;
      state.dataFilter = payload;
      state.loading = false;
    },

    [fetchDataAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.data = [];
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setFilterStatus, setFilterType, onSortUp, onSortDown, setBuy } =
  dataSlice.actions;
export default dataSlice.reducer;
