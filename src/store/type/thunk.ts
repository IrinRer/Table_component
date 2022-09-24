import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api } from 'network';
import { TYPES_SLICE_ALIAS } from './types';

export const fetchTypesAction = createAsyncThunk(
  `${TYPES_SLICE_ALIAS}/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get('/type');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);