import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AuthState {
  value: {
    access_token: string;
  } | null;
}

const initialState: AuthState = {
  value: null,
};

export const authenticationSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<{ access_token: string }>) => {
      state.value = action.payload;
    },
    removeAuthToken: (state) => {
      state.value = null;
    },
  },
});

export const { setAuthToken, removeAuthToken } = authenticationSlice.actions;
export const selectToken = (state: RootState) => state.token.value;

export default authenticationSlice.reducer;
