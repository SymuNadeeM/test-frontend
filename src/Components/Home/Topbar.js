import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [nav, setNav] = useState(true);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="border-b">
        <div className="container text-sm px-5 md:mx-auto">
          {/* large sceen */}
          <div className="hidden md:flex items-center justify-between md:py-1">
            {/* icons */}
            <div className="flex items-center gap-1.5">
              <Link to="#">
                <i className="fa-brands fa-linkedin-in text-gray-500 border h-[24px] w-[24px] flex items-center justify-center border-gray-300 mr-1 bg-gray-50 p-1 rounded-full hover:bg-[#0072b1] duration-500 hover:text-white"></i>
              </Link>
              <Link to={"#"}>
                <i className="fa-brands fa-facebook-f text-gray-500 border h-[24px] w-[24px] flex items-center justify-center border-gray-300 mr-1 bg-gray-50 p-1 rounded-full hover:bg-[#3b5998] duration-500 hover:text-white"></i>
              </Link>
              <Link to={"#"}>
                <i className="fa-brands fa-twitter text-gray-500 border h-[24px] w-[24px] flex items-center justify-center border-gray-300 mr-1 bg-gray-50 p-1 rounded-full hover:bg-[#00acee] duration-500 hover:text-white"></i>
              </Link>
              <Link to={"#"}>
                <i className="fa-brands fa-instagram text-gray-500 border h-[24px] w-[24px] flex items-center justify-center border-gray-300 mr-1 bg-gray-50 p-1 rounded-full hover:bg-[#cd486b] duration-500 hover:text-white"></i>
              </Link>
            </div>
            {/* text */}
            <div>
              <p className="text-gray-600 uppercase text-bold">
                free shipping this week order over -$75
              </p>
            </div>
            {/* dropdown */}
            <div>
              <div className="flex">
                <Link to="userpage">Account</Link>
                <p>Dropdown</p>
              </div>
            </div>
          </div>
          {/* small sceen */}
          <div className="container py-1 flex items-center justify-between md:hidden ">
            <div>
              <i className="fa-solid fa-house text-gray-500 text-2xl  hover:text-pink-400 duration-500"></i>
            </div>
            <div>
              <p className="text-gray-600 uppercase text-sm">
                free shipping this week
              </p>
              <p className="text-gray-600 uppercase text-sm">order over -$75</p>
            </div>

            <ul className="flex items-center space-x-3">
              <li>
                <Link to="userpage">
                  <i className="fa-regular fa-user text-gray-500 text-2xl  hover:text-pink-400 duration-500"></i>
                </Link>
              </li>
              <li className="relative">
                <i className="fa-regular fa-heart text-gray-500 text-3xl   hover:text-pink-400 duration-500"></i>

                <span className="absolute top-[-3px] right-[-3px]  rounded-full w-4  h-4  items-center flex justify-center  bg-[#ff909d] text-white">
                  2
                </span>
              </li>
              <li className="relative">
                <Link to="#">
                  <i className="fa-solid fa-bag-shopping text-gray-500 text-2xl  hover:text-pink-400 duration-500"></i>
                </Link>

                <span className="absolute top-[-3px] right-[-5px] rounded-full w-4  h-4  items-center flex justify-center  bg-[#ff909d] text-white">
                  3
                </span>
              </li>
              <li>
                <i
                  className="fa-solid fa-bars text-gray-500 text-2xl  hover:text-pink-400 duration-500 ml-1 "
                  onClick={handleClick}
                ></i>
              </li>
              {/* drawer bar addd */}

              <div
                className={
                  !nav
                    ? "fixed left-0 top-0 w-[60%] h-full z-50  ease-in-out duration-500 bg-white"
                    : "fixed left-[-100%] duration-200"
                }
              >
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div className=" flex items-center gap-[4px] md:gap-2">
                      <h1 className="text-2xl font-sans font-bold">
                        <span className="text-[#ff909d]">E-</span>
                        logo
                      </h1>
                    </div>
                    <div onClick={handleClick}>
                      <i class="fa-regular fa-circle-xmark text-green text-xl"></i>
                    </div>
                  </div>
                  <ul className="uppercase mt-4 text-ctext divide-ctext2 space-y-2 divide-y">
                    <li>home</li>
                    <li>shop</li>
                    <li>blog</li>
                    <li>about</li>
                    <li>contact</li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
