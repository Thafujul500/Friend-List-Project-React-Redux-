import { configureStore } from "@reduxjs/toolkit";
import nameReducers from "../app/features/counter/CounterSlice";

let store = configureStore({
  reducer: {
    nameReducers: nameReducers,
  },
});
export default store;
