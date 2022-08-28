import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const StoreItem = ({ id, name, price, imageUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="card h-100">
      <img
        className="card-image-top"
        src={imageUrl}
        alt=""
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <div className="card-title h5 d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add To Cart
            </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <span className="fs-3">{quantity}</span> in cart
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
