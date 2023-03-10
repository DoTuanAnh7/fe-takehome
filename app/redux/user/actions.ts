import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from '../../../config';
import {postApi} from '../api';
import {GET_INFOMATION, GET_NEWS} from './types';

const apiUrl = Config.API_URL;

export const getNews = createAsyncThunk(
  GET_NEWS,
  async (params: any, {rejectWithValue}) => {
    try {
      const endpoint = `${apiUrl}/news`;
      const {data} = await postApi(endpoint, params.data);
      if (params.onResponse) {
        params.onResponse(data);
      }
      return data;
    } catch (err) {
      const {data} = err.response;
      if (params.onError) {
        params.onError(data);
      }
      return rejectWithValue(data);
    }
  },
);
