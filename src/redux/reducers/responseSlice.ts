import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const responseSlice = createSlice({
  name: 'apiResponse',
  initialState: {
    apiResponse: ``,
  },
  reducers: {
    changeAPIResponse(state, action: PayloadAction<string>) {
      state.apiResponse = action.payload;
    },
  },
});

export default responseSlice.reducer;
