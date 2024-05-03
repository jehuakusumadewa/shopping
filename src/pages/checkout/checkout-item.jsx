import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const CheckoutItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="discription">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <input value={props.angka[id]} />
        </div>
      </div>
    </div>
  );
};
