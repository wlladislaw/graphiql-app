import { combineReducers, configureStore } from '@reduxjs/toolkit';
import editorReducer from './reducers/editorSlice';
const rootReducer = combineReducers({
  editorReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
