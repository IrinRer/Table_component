import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api } from 'network';
import { STATUS_SLICE_ALIAS } from './types';

export const fetchStatusAction = createAsyncThunk(
  `${STATUS_SLICE_ALIAS}/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get('/status');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
