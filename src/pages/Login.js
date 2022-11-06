import React from "react";
import HomeCat from "../Categories/HomeCat";
import Breadcrumb from "../Components/AllproductCate/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Home/Navbar";
import Services from "../Components/Home/Services";
import Topbar from "../Components/Home/Topbar";
import UserLogin from "../Components/User/UserLogin";

const Login = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <HomeCat />
      <Breadcrumb />
      <UserLogin />
      <Services />
      <Footer />
    </>
  );
};

export default Login;
