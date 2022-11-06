import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import HomeCat from "../Categories/HomeCat";
import Breadcrumb from "../Components/AllproductCate/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Home/Navbar";
import Services from "../Components/Home/Services";
import Topbar from "../Components/Home/Topbar";

const UserLayoutPage = () => {
  const [active, setactive] = useState({ name: "dashboard" });

  return (
    <>
      <Topbar />
      <Navbar />
      <HomeCat />
      <Breadcrumb />
      <div className="p-5 md:p-[50px]">
        <div className="grid  md:grid-cols-12 md:gap-6 md:p-10">
          <div className="hidden md:grid  col-span-2">
            <div className="flex flex-col justify-left gap-2 text-sm space-y-2">
              <li
                onClick={() => setactive({ name: "dashboard" })}
                className="list-none"
              >
                <Link
                  to="/userpage"
                  className={
                    active.name === "dashboard"
                      ? " border rounded-lg px-4 flex items-center gap-2 justify-start  py-2  bg-green-700 w-full text-white"
                      : " flex items-center gap-2 justify-start  border rounded-lg px-4  py-2 w-full text-green-700"
                  }
                >
                  <i className="fa-solid fa-sliders"></i> Dashboard
                </Link>
              </li>

              <li
                onClick={() => setactive({ name: "order" })}
                className="list-none"
              >
                <Link
                  to="orders"
                  className={
                    active.name === "order"
                      ? "flex items-center gap-2 justify-start w-full border rounded-lg px-4  py-2  bg-green-700  text-white"
                      : "flex items-center gap-2 justify-start  border rounded-lg px-4  py-2  text-green-700 w-full"
                  }
                >
                  <i className="fa-brands fa-opencart"></i>Orders
                </Link>
              </li>

              <li
                onClick={() => setactive({ name: "track_order" })}
                className="list-none"
              >
                <Link
                  to="trackorder"
                  className={
                    active.name === "track_order"
                      ? "flex items-center gap-2 justify-start w-full border rounded-lg px-4  py-2  bg-green-700 text-white"
                      : "flex items-center gap-2 justify-start w-full  border rounded-lg px-4  py-2  text-green-700"
                  }
                >
                  {" "}
                  <i className="fa-solid fa-cart-flatbed"></i>Track Your Order{" "}
                </Link>
              </li>

              <li
                onClick={() => setactive({ name: "address" })}
                className="list-none"
              >
                <Link
                  to="address"
                  className={
                    active.name === "address"
                      ? "flex items-center gap-2 justify-start w-full border rounded-lg px-4  py-2  bg-green-700 text-white"
                      : "flex items-center gap-2 justify-start w-full border rounded-lg px-4  py-2  text-green-700"
                  }
                >
                  {" "}
                  <i className="fa-solid fa-location-dot"></i>My Address
                </Link>
              </li>

              <li
                onClick={() => setactive({ name: "account" })}
                className="list-none"
              >
                <Link
                  to="account_details"
                  className={
                    active.name === "account"
                      ? "flex items-center gap-2 justify-start w-full border rounded-lg px-4  py-2  bg-green-700 text-white"
                      : "flex items-center gap-2 justify-start w-full border rounded-lg px-4  py-2  text-green-700"
                  }
                >
                  <i className="fa-regular fa-user"></i>Account Details
                </Link>
              </li>
            </div>
          </div>
          <div className="grid col-span-12 md:col-span-10 md:px-10">
            <Outlet />
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
};

export default UserLayoutPage;
