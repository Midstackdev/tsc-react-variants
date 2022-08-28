import React from "react";
import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};
const StoreItem = ({ id, name, price, imageUrl }: StoreItemProps) => {
  return (
    <div className="card">
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
      </div>
    </div>
  );
};

export default StoreItem;
