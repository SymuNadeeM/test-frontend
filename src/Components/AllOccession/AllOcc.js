import React from "react";

import DealofDay from "./DealofDay";
import NewArrival from "./NewArrival";
import NewProducts from "./NewProducts";
import TopRate from "./TopRate";
import Trending from "./Trending";

const AllOcc = () => {
  // <div className="grid  gap-8 w-full md:grid-cols-2 xl:grid-cols-4"></div>
  return (
    <>
      <div className="container mx-auto px-4">
        <NewArrival />

        <Trending />

        <TopRate />

        <div>
          <DealofDay />
          <NewProducts />
        </div>
      </div>
    </>
  );
};

export default AllOcc;
