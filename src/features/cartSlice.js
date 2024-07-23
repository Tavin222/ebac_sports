import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    // Outras reducers podem ser adicionadas conforme necessário
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
