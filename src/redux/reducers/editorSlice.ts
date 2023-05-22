import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const editorSlice = createSlice({
  name: 'editorTextarea',
  initialState: {
    textAreaValue: '',
  },
  reducers: {
    changeEditorTextArea(state, action: PayloadAction<string>) {
      state.textAreaValue = action.payload;
    },
  },
});

export default editorSlice.reducer;
