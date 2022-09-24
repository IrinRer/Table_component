import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITypeSlice, TYPES_SLICE_ALIAS } from './types';
import { fetchTypesAction } from './thunk';

const initialState: ITypeSlice = {
  type: [],
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: TYPES_SLICE_ALIAS,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTypesAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [fetchTypesAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Array<string>>,
    ) => {
      state.type = payload;
      state.loading = false;
    },

    [fetchTypesAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.type = [];
      state.loading = false;
      state.error = payload;
    },
  },
});

export default dataSlice.reducer;
