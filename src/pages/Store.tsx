import React from "react";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <div className="g-3 row row-cols-lg-3 row-cols-md-2 row-cols-1">
        {storeItems.map((item) => (
          <div className="col" key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
