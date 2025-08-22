import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    data: {},
  },
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      state.data[id] = { ...action.payload, quantity: 1 };
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      delete state.data[id];
    },
    increaseQuantity(state, action) {
      const { id } = action.payload;
      if (state.data[id]) state.data[id].quantity += 1;
    },
    decreaseQuantity(state, action) {
      const { id } = action.payload;
      if (state.data[id]) {
        state.data[id].quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  slice.actions;

export default slice.reducer;
