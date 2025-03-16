import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import userReducer from "./reducers/userSlice";
import basketReducer from "./reducers/basketSlice";
import orderReducer from "./reducers/orderSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer,
    order: orderReducer
  },
});

setupListeners(store.dispatch);