import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStatusSlice, STATUS_SLICE_ALIAS } from './types';
import { fetchStatusAction } from './thunk';

const initialState: IStatusSlice = {
  status: [],
  loading: false,
  error: null,
};

export const statusSlice = createSlice({
  name: STATUS_SLICE_ALIAS,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStatusAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [fetchStatusAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Array<string>>,
    ) => {
      state.status = payload;
      state.loading = false;
    },

    [fetchStatusAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.status = [];
      state.loading = false;
      state.error = payload;
    },
  },
});

export default statusSlice.reducer;
