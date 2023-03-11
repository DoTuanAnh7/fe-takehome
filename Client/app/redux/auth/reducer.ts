import {createSlice} from '@reduxjs/toolkit';
import {login} from './actions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      loading: false,
      result: {},
      error: undefined,
    },
  },
  reducers: {},
  extraReducers: {
    [login.pending]: (state, action) => {
      state.login.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.login.loading = false;
      state.login.result = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.login.loading = false;
      state.login.error = action.payload;
    },
  },
});

export const auth = state => state.auth;

export default authSlice.reducer;
