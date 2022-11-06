import React from "react";
import { Link } from "react-router-dom";

const CPages = () => {
  return (
    <>
      <div className="group  relative">
        <button className=" py-2 items-center">
          <span className="mr-1 uppercase text-gray-700 font-bold">Pages</span>
        </button>
        <ul className="absolute z-50 duration-200 hidden bg-white rounded-lg text-gray-700  p-5 shadow-lg group-hover:block">
          <li className="">
            <Link
              to={"/categories"}
              className="rounded-t hover:text-[#ff909d]  py-2 px-4 max-width"
            >
              Categories
            </Link>
          </li>
          <li className="">
            <Link
              to={"/prodetails"}
              className="rounded-t  hover:text-[#ff909d]  py-2 px-4 max-width"
            >
              Product_Details
            </Link>
          </li>
          <li className="">
            <Link
              to={"/login"}
              className="rounded-t hover:text-[#ff909d]  py-2 px-4 max-width"
            >
              Login
            </Link>
          </li>
          <li className="">
            <Link
              to={"/forgotPage"}
              className="rounded-t hover:text-[#ff909d]  py-2 px-4 max-width"
            >
              ForgotPage
            </Link>
          </li>
          <li className="">
            <Link
              to={"/reset"}
              className="rounded-t hover:text-[#ff909d]  py-2 px-4 max-width"
            >
              Reset
            </Link>
          </li>
          <li className="">
            <Link
              to={"/userpage"}
              className="rounded-t hover:text-[#ff909d]  py-2 px-4 max-width"
            >
              Userpage
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

export default CPages;
