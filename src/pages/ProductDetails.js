import React from "react";
import HomeCat from "../Categories/HomeCat";
import Breadcrumb from "../Components/AllproductCate/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Home/Navbar";
import Services from "../Components/Home/Services";
import Topbar from "../Components/Home/Topbar";
import ProductDetailsBody from "../Components/ProductDetails/ProductDetailsBody";

const ProductDetails = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <HomeCat />
      <Breadcrumb />
      <ProductDetailsBody />
      <Services />
      <Footer />
    </>
  );
};

export default ProductDetails;
