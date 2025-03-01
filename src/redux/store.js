import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import userReducer from "./reducers/userSlice";
export const store = configureStore({
  reducer: {
    user: userReducer
  },
});
setupListeners(store.dispatch);