import { configureStore } from "@reduxjs/toolkit";

import memoReducer from "./memo-slice";

export const store = configureStore({
  reducer: {
    memo: memoReducer,
  },
});

export default store;
