import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  username: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.username = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
