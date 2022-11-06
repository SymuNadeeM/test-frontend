import React from "react";
import forgotpic from "../../Assets/Images/forgot_password.svg";

const ForgotPassword = () => {
  return (
    <>
      <div className="p-8">
        <div className="grid  md:grid-cols-3">
          <div className="grid col-span-1"></div>
          <div className="grid col-span-1">
            <div className="p-5 space-y-4">
              <div>
                <img src={forgotpic} alt="" />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl text-gray-700 font-bold">
                  Forgot your password?
                </h1>
                <p
                  className="text-gray-400 
                 duration-150
                hover:text-gray-500"
                >
                  Not to worry, we got you! Let’s get you a new password. Please
                  enter your email address or your Username.
                </p>
              </div>
              <form>
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
                  className="text-white bg-gray-900  hover:bg-[#3bb77c] duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center "
                >
                  Reset passwords
                </button>
              </form>
            </div>
          </div>
          <div className="grid col-span-1"></div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
