import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api } from 'network';
import { DATA_SLICE_ALIAS } from './types';

export const fechDataAction = createAsyncThunk(
  `${DATA_SLICE_ALIAS}/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get('/data');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
