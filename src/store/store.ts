import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TestingSlice } from "./reducers/TestingSlice";

const rootReducer = combineReducers({
  testing: TestingSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
