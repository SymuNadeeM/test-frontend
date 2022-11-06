import React from "react";
import HomeCat from "../Categories/HomeCat";
import AllOcc from "../Components/AllOccession/AllOcc";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Home/Banner";
import EcCategories from "../Components/Home/EcCategories";
import Fashion from "../Components/Home/Fashion";
import Navbar from "../Components/Home/Navbar";
import Services from "../Components/Home/Services";
import Topbar from "../Components/Home/Topbar";

const Home = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <HomeCat />
      <Banner />
      <EcCategories />
      <AllOcc />
      <Fashion />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
