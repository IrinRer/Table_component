import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DATA_SLICE_ALIAS, IDataSlice, IDataItem } from './types';
import { fetchDataAction } from './thunk';

const initialState: IDataSlice = {
  data: [],
  dataFilter: [],
  filter: 'all',
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: DATA_SLICE_ALIAS,
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;

      if (state.filter === 'all') {
        state.dataFilter = state.data;
      } else {
        state.dataFilter = state.data.filter(
          (item) => item.status === action.payload,
        );
      }
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

export const { setFilter } = dataSlice.actions;
export default dataSlice.reducer;
