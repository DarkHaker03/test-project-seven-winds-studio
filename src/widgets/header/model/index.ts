import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  selectedSection: string;
  sections: string[];
}

const initialState: State = {
  selectedSection: 'Просмотр',
  sections: ['Просмотр', 'Управление'],
};

export const headerSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedSection(state, action: PayloadAction<string>) {
      state.selectedSection = action.payload;
    },
  },
});

export const { setSelectedSection } = headerSlice.actions;
export default headerSlice.reducer;
