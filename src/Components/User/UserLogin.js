import React from "react";
import { Link } from "react-router-dom";
import log1 from "../../Assets/Images/login-1.png";

const UserLogin = () => {
  return (
    <>
      <div className="p-8">
        <div className="grid md:grid-cols-12 gap-6 py-[40px]">
          <div className="grid col-span-2"></div>
          <div className="grid col-span-4">
            <img src={log1} alt="" />
          </div>
          <div className="grid  col-span-4">
            <form>
              <div className="mb-6">
                <h1 className="text-4xl text-gray-700 font-bold">Login</h1>
                <p className="text-sm py-2">
                  Don't have an account?{" "}
                  <Link to={"#"} className="text-[#3bb77c]">
                    Create here
                  </Link>{" "}
                </p>
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  className=" border rounded-lg outline-0 focus:border-green-500 w-full p-2 "
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  className=" border rounded-lg outline-0 focus:border-green-500 w-full p-2 "
                  placeholder="Your Password*"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  id="password"
                  className=" border rounded-lg outline-0 focus:border-green-500 w-1/2 p-2 "
                  placeholder="Scurity Codes*"
                  required
                />
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-[#3bb77c] focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-gray-900 hover:bg-[#3bb77c] duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="grid col-span-2"></div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
