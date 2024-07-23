import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
