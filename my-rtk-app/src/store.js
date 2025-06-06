import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
// there was a thing in conventional Redux called combineReducers
// this import automatically does that under the hood
export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
