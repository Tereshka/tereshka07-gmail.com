import React, { useState, useContext } from 'react';
import { Context } from '../Context';

import CartItem from "../components/CartItem"

function Cart() {
  const [buttonText, setButtonText] = useState('Place Order');
  const { cartItems, emptyCart } = useContext(Context);

  // get price of item, when it will be in item
  const totalCost = cartItems.reduce((acc, cartItem) => acc + 5.99, 0);
  const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const cartItemsElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));

  function handleOrder() {
    setButtonText('Ordering...');
    setTimeout(() => {
      setButtonText('Place Order');
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemsElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      {cartItems.length > 0
        ? <div className="order-button">
          <button onClick={handleOrder}>{buttonText}</button>
        </div>
        : <p>You have no items in your cart.</p>
      }
    </main>
  )
}

export default Cart;