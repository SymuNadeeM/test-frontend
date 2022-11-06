import React from "react";
import CatProduct from "./CatProduct";
import FilterProduct from "./FilterProduct";

const Productcat = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-10">
          <div className="hidden md:grid md:col-span-1">
            <FilterProduct />
          </div>
          <div className="grid  md:col-span-4">
            <CatProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default Productcat;
