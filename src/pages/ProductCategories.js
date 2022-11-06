import React from "react";
import HomeCat from "../Categories/HomeCat";
import Breadcrumb from "../Components/AllproductCate/Breadcrumb";
import Productcat from "../Components/AllproductCate/Productcat";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Home/Navbar";
import Services from "../Components/Home/Services";
import Topbar from "../Components/Home/Topbar";

const ProductCategories = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <HomeCat />
      <Breadcrumb />
      <Productcat />
      <Services />
      <Footer />
    </>
  );
};

export default ProductCategories;
