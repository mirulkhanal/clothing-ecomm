import React, { useContext } from 'react';
import './cart-dropdown.scss';
import Button from '../button/Button';
import CartItem from '../cart-item/cart-item';
import { CartContext } from '../../contexts/cart.context';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {!cartItems && 'No items in cart'}
        {cartItems &&
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
