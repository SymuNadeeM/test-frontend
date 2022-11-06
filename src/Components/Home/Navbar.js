import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="border-b py-3 md:py-5">
        <div className="container px-4 mx-auto">
          <div className="flex-col flex  items-center md:flex  md:flex-row md:justify-between">
            {/* logo */}
            <div className="">
              <Link to={"/"}>
                <h1 className="text-5xl font-sans font-bold">
                  <span className="text-[#ff909d]">E-</span>logo
                </h1>
              </Link>
            </div>
            {/* search */}
            <form action="" className="w-full md:w-2/5 ">
              <div className=" mt-4    flex items-center justify-between border rounded-lg md:m-0 ">
                <input
                  className="w-full   outline-none px-4"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your..."
                />
                <button className="group border-l-[.85px] px-[5px] hover:text-white hover:border-l-[.85px] hover:bg-[#ff909d] duration-300  hover:ring-inset hover:ring-[2px] hover:ring-[#ff909d]  hover:rounded-r-lg ">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className=" mt-1 p-2 text-gray-500 hover:text-[#fff] duration-300 "
                  />
                </button>
              </div>
            </form>
            {/* icon */}
            <ul className="hidden md:flex items-center justify-around">
              <li>
                <Link to="/userpage">
                  <i className="fa-regular fa-user text-gray-500 text-3xl  hover:text-pink-400 duration-500"></i>
                </Link>
              </li>
              <li className="relative">
                <i className="fa-regular fa-heart text-gray-500 text-3xl mr-5 ml-5  hover:text-pink-400 duration-500"></i>

                <span className="absolute bottom-[4px] p- right-[15px]  rounded-full w-4  h-4  items-center flex justify-center  bg-[#ff909d] text-white">
                  2
                </span>
              </li>
              <li className="relative">
                <Link to="#">
                  <i className="fa-solid fa-bag-shopping text-gray-500 text-3xl  hover:text-pink-400 duration-500"></i>
                </Link>

                <span className="absolute bottom-[4px] p- right-[-10px]  rounded-full w-4  h-4  items-center flex justify-center  bg-[#ff909d] text-white">
                  2
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
