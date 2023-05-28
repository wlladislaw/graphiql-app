import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const apiInputSlice = createSlice({
  name: 'apiInputValue',
  initialState: {
    apiInput: `write API `,
  },
  reducers: {
    changeAPIInput(state, action: PayloadAction<string>) {
      state.apiInput = action.payload;
    },
  },
});

export default apiInputSlice.reducer;
