import React from "react";
import resetlogo from "../../Assets/Images/reset_password.svg";

const ResetPass = () => {
  return (
    <>
      <div className="grid md:grid-cols-12 p-6 md:py-[50px]">
        <div className="grid col-span-1"></div>
        <div className="grid col-span-10 mx-auto">
          <div className="p-5 space-y-4">
            <div className="space-y-2">
              <div>
                <img src={resetlogo} alt="" />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl text-gray-700 font-bold">
                  Set new password
                </h1>
                <p
                  className="text-gray-400 
                 duration-150
                hover:text-gray-500"
                >
                  Please create a new password that you don’t use on any other
                  site.
                </p>
              </div>
            </div>
            {/* form */}
            <div className=" grid items-center space-y-4 md:grid-cols-3">
              <div className="grid col-span-2">
                <form>
                  <div className="mb-2">
                    <input
                      type="text"
                      id="password"
                      className=" border rounded-lg outline-0 focus:border-green-500 w-full md:w-3/4 p-2 "
                      placeholder="Password*"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="text"
                      id="password"
                      className=" border rounded-lg outline-0 focus:border-green-500 w-full md:w-3/4 p-2 "
                      placeholder="Confirm your password*"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-gray-900 hover:bg-[#3bb77c] duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Reset password
                  </button>
                </form>
              </div>
              <div className="grid col-span-1">
                <p className=" text-gray-600 text-base font-medium">
                  Password must:
                </p>
                <p className="text-sm text-gray-400">
                  Be between 9 and 64 characters
                </p>
                <p className="text-sm text-gray-400">
                  Include at least tow of the following:
                </p>
                <ul className="text-xs text-gray-400 list-inside	">
                  <li className="list-disc">An uppercase character</li>
                  <li className="list-disc">A lowercase character</li>
                  <li className="list-disc">A number</li>
                  <li className="list-disc">A special character</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid col-span-1"></div>
      </div>
    </>
  );
};

export default ResetPass;
