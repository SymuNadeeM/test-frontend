import React from "react";
import DetailsTabs from "./DetailsTabs";
import ProductEverything from "./ProductEverything";
import RelatedProduct from "./RelatedProduct";

const ProductDetailsBody = () => {
  return (
    <>
      <div className="container mx-auto px-4 space-y-[30px] md:space-y-[50px]">
        <ProductEverything />
        <DetailsTabs />
        <RelatedProduct />
      </div>
    </>
  );
};

export default ProductDetailsBody;
