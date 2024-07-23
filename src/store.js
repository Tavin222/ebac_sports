import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Adicione outros reducers aqui, se houver
  },
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
