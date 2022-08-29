import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};
const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Cart</h5>
        <button
          type="button"
          className="btn-close"
          onClick={closeCart}
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="vstack gap-3 minBreakpoint-xs">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total:{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
