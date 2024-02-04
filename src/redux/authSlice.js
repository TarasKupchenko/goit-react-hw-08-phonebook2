import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import axios from 'axios';

export const $authInstance = axios.create({
  baseUrl: 'https://connections-api.herokuapp.com/',
});
const setToken = token => {
  $authInstance.defaults.headers.common.Auhorization = `Bearer ${token}`;
};
export const apiRegisterUser = createAsyncThunk(
  'auth/apiRegisterUser',
  async (formData, tunkApi) => {
    try {
      const { data } = await $authInstance.post('/user/signup', formData);
      setToken(data.token);
      return data;
    } catch (error) {
      return tunkApi.rejectWithValue(error);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  'auth/apiLoginUser',
  async (formData, tunkApi) => {
    try {
      const { data } = await $authInstance.post('/user/login', formData);
      setToken(data.token);
      return data;
    } catch (error) {
      return tunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  token: null,
  isLoggedIn: false,
  userData: { name: null, email: null },
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: buider =>
    buider
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addMatcher(
        isAnyOf(apiRegisterUser.pending, apiLoginUser.pending),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(apiRegisterUser.rejected, apiLoginUser.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
