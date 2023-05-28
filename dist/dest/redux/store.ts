import { combineReducers, configureStore } from '@reduxjs/toolkit';
import editorReducer from './reducers/editorSlice';
import responseReducer from './reducers/responseSlice';

import queryReducer from './reducers/queryInputSlice';
const rootReducer = combineReducers({
  editorReducer,
  responseReducer,
  queryReducer,

});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
