import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const queryInputSlice = createSlice({
  name: 'queryInput',
  initialState: {
    queryInputValue: ``,
  },
  reducers: {
    changeQueryInputValue(state, action: PayloadAction<string>) {
      state.queryInputValue = action.payload;
    },
  },
});

export default queryInputSlice.reducer;
