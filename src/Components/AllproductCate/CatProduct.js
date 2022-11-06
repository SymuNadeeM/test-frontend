import React from "react";
import ProductAll from "./ProductAll";
import Proselect from "./Proselect";

const CatProduct = () => {
  return (
    <>
      {/* large screen */}
      <div className="hidden md:flex">
        <div className="w-full bg-gray-100 flex justify-between items-center p-1">
          <p className="px-2">Shop</p>
          <Proselect />
        </div>
      </div>
      {/* small screen */}
      <div>
        <div className="grid grid-cols-3 border divide-x text-center md:hidden h-10 leading-10">
          <div>
            <button>
              <i className="fa-solid fa-angle-left"></i> Back
            </button>
          </div>
          <div>
            <button>SortBy</button>
          </div>
          <div>
            <button>
              <i className="fa-sharp fa-solid fa-filter text-red-500"></i>Filter
            </button>
          </div>
        </div>
      </div>
      {/* product */}
      <div>
        <ProductAll />
      </div>
    </>
  );
};

export default CatProduct;
