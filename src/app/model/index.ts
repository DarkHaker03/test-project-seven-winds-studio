import { createSlice } from '@reduxjs/toolkit';

interface State {
  a: string;
}

const initialState: State = { a: '3' };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
