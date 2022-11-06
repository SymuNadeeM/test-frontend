import React from "react";
import { Link } from "react-router-dom";
import CBlog from "./SingleCatg/CBlog";
import CCatagories from "./SingleCatg/CCatagories";
import CElements from "./SingleCatg/CElements";
import CHotOffer from "./SingleCatg/CHotOffer";
import COthers from "./SingleCatg/COthers";
import CPages from "./SingleCatg/CPages";
import CProducts from "./SingleCatg/CProducts";

const HomeCat = () => (
  <>
    <div className="hidden md:flex">
      <div className="container mx-auto px-[100px]">
        <div className="flex items-center justify-between">
          <div>
            <Link to={"#"}>
              <button className=" py-2 items-center">
                <span className="mr-1 uppercase text-gray-700 font-bold">
                  Home
                </span>
              </button>
            </Link>
          </div>
          <div>
            <CCatagories />
          </div>
          <div>
            <CProducts />
          </div>
          <div>
            <CPages />
          </div>
          <div>
            <COthers />
          </div>
          <div>
            <CBlog />
          </div>
          <div>
            <CElements />
          </div>
          <div>
            <CHotOffer />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HomeCat;
