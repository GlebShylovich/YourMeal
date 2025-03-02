import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket(state, action) {
      state.items = action.payload;
    },
    emptyBasket(state) {
      state.items = [];
    },
    addItem(state, action) {
      if (!Array.isArray(state.items)) {
        state.items = [];
      }
      const { id, count = 1 } = action.payload;
      const exitingItem = state.items.find((item) => item.id === id);
      if (exitingItem) {
        exitingItem.count += count;
      } else {
        state.items.push({ ...action.payload, count });
      }
    },
    removeItem(state, action) {
      const { id } = action.payload;
      const exitingItem = state.items.find((item) => item.id === id);
      if (exitingItem) {
        if (exitingItem.count === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          exitingItem.count -= 1;
        }
      }
    },
  },
});

export const { setBasket, emptyBasket, addItem, removeItem } =
  basketSlice.actions;
export default basketSlice.reducer;
