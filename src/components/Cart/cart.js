import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/slices/cartSlice';
import { CartContainer, CartItem, RemoveButton } from "./style";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const product = useSelector(state => state.products.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <CartContainer>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem key={item.productId}>
            <span>{product.title} - Quantity: {item.quantity}</span>
            <RemoveButton onClick={() => handleRemoveFromCart(item.productId)}>Remove</RemoveButton>
          </CartItem>
        ))}
      </ul>
    </CartContainer>
  );
};

export default Cart;
