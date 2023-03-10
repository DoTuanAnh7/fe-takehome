import {createSlice} from '@reduxjs/toolkit';
import {getNews} from './actions';


const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfomation: {
      loading: false,
      result: {},
      error: undefined,
    },
    news: {
      loading: false,
      result: {},
      error: undefined,
    },
  },
  reducers: {},
  extraReducers: {
    [getNews.pending]: (state, action) => {
      state.news.loading = true;
    },
    [getNews.fulfilled]: (state, action) => {
      state.news.loading = false;
      state.news.result = action.payload;
    },
    [getNews.rejected]: (state, action) => {
      state.news.loading = false;
      state.news.error = action.payload;
    },
  },
});

export const user = state => state.user;

export default userSlice.reducer;
