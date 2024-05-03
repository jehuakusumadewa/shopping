import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./checkout.css";
import { PRODUCTS } from "../../products";
import { CheckoutItem } from "./checkout-item";
export const Checkout = (props) => {
  const { checkoutItems, getTotalCartAmount, getTimestamp } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const waktu = getTimestamp();
  return (
    <div className="checkout">
      <div>
        <h1>Riwayat Pembelian </h1>
      </div>
      <div className="cartItems">
        {console.log(checkoutItems)}
        {console.log(checkoutItems)}
        {console.log(checkoutItems)}
        {console.log(checkoutItems)}
        {console.log(checkoutItems)}
        {/* {PRODUCTS.map((product) => {
          if (checkoutItems[product.id] !== 0) {
            console.log(checkoutItems);
            return <CheckoutItem data={product} />;
          }
        })} */}
      </div>
      <div>
        <p>Subtotal : ${totalAmount}</p>
        <p>Jam Pembayaran : {waktu}</p>
      </div>
    </div>
  );
};
