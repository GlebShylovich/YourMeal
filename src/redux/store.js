import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import userReducer from "./reducers/userSlice";
import basketReducer from "./reducers/basketSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer
  },
});
setupListeners(store.dispatch);