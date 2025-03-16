import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders(state, action) {
      state.items = action.payload;
    },
    addOrder(state, action) {
      if (!Array.isArray(state.items)) {
        state.items = [];
      }
      state.items.push(action.payload);
    },
  },
});

export const { setOrders, addOrder } = orderSlice.actions;
export default orderSlice.reducer;
