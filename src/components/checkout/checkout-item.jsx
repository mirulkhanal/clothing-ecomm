import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ item }) => {
  const { cartItems, addItemToCart } = useContext(CartContext);
  const handleReduce = () => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    addItemToCart({
      ...existingItem,
      quantity: existingItem.quantity - 1,
    });
    console.log(cartItems);
  };
  return (
    <div>
      <h2>{item.name}</h2>
      <h4>
        <button onClick={handleReduce}>{"<"}</button>Price: {item.price}
        <button>{">"}</button>
      </h4>
      <h4>Quantity: {item.quantity}</h4>
    </div>
  );
};

export default CheckoutItem;
