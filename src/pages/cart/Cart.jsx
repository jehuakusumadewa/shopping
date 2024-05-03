import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { Checkout } from "../checkout/Checkout";

export const Cart = () => {
  const {
    cartItems,
    getTotalCartAmount,
    getDefaultCart,
    setCartItems,
    checkoutItems,
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const check = Object.assign({}, cartItems);
  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal : ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button
            onClick={() => {
              console.log(checkoutItems);
              Object.assign(checkoutItems, cartItems);
              // setCartItems(getDefaultCart());
              console.log(checkoutItems);
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Cart is empty</h1>
      )}
    </div>
  );
};
