import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const responseSlice = createSlice({
  name: 'apiResponse',
  initialState: {
    apiResponse: `Hit the Play Button to get a response here`,
  },
  reducers: {
    changeAPIResponse(state, action: PayloadAction<string>) {
      state.apiResponse = action.payload;
    },
  },
});

export default responseSlice.reducer;
