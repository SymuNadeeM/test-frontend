import React from "react";
import { Link } from "react-router-dom";

const CProducts = () => {
  return (
    <>
      <div className="group  relative">
        <button className=" py-2 items-center">
          <span className="mr-1 uppercase text-gray-700 font-bold">
            Products
          </span>
        </button>
        <ul className="absolute z-50 duration-200 hidden bg-white  rounded-lg text-gray-700  p-5 shadow-lg group-hover:block">
          <li className="">
            <Link
              to={"#"}
              className="rounded-t hover:text-[#ff909d]  py-2 px-4 max-width"
            >
              Product_Page
            </Link>
          </li>
          <li className="">
            <Link
              to={"#"}
              className="rounded-t  hover:text-[#ff909d]  py-2 px-4 max-width"
            >
              Product_360
            </Link>
          </li>
          <li className="">
            <Link
              to={"#"}
              className="rounded-t hover:text-[#ff909d]  py-2 px-4 max-width"
            >
              Product_Video
            </Link>
          </li>
          <li className="">
            <Link
              to={"#"}
              className="rounded-t hover:text-[#ff909d]  py-2 px-4 max-width"
            >
              Product_Gallery
            </Link>
          </li>
          <li className="">
            <Link
              to={"#"}
              className="rounded-t hover:text-[#ff909d]  py-2 px-4 max-width"
            >
              Product_Full_width
            </Link>
          </li>

          {/* <li className="">
            <Link
              to={"#"}
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            >
              One
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default CProducts;
