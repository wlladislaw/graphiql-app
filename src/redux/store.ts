import { combineReducers, configureStore } from '@reduxjs/toolkit';
import editorReducer from './reducers/editorSlice';
import responseReducer from './reducers/responseSlice';
const rootReducer = combineReducers({
  editorReducer,
  responseReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
