import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout/checkout-item";
const Checkout = () => {
  
  const { cartItems } = useContext(CartContext);
  return (
    <>{cartItems && cartItems.map((item) => <CheckoutItem item={item} />)}</>
  );
};

export default Checkout;
