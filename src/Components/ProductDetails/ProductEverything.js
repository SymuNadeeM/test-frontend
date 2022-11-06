import React from "react";
import DetailsPage from "./DetailsPage";
import ImagePage from "./ImagePage";

const ProductEverything = () => {
  return (
    <>
      <div className="grid md:grid-cols-5  ">
        <div className=" grid md:col-span-2 ">
          <ImagePage />
        </div>
        <div className=" grid md:col-span-3">
          <DetailsPage />
        </div>
      </div>
    </>
  );
};

export default ProductEverything;
