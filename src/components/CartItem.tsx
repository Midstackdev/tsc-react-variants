import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type cartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: cartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item === null) return null;

  return (
    <div className="hstack gap-2 minBreakpoint-xs d-flex align-items-center">
      <img
        src={item?.imageUrl}
        alt=""
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item?.price as number)}
        </div>
      </div>
      <div>{formatCurrency((item?.price as number) * quantity)}</div>
      <button
        type="button"
        className="btn btn-sm btn-close"
        onClick={() => removeFromCart(item?.id as number)}
      ></button>
    </div>
  );
};

export default CartItem;
