import React from "react";
import { Link } from "react-router-dom";
import cat1 from "../../Assets/Images/category-2.svg";

const FilterProduct = () => {
  return (
    <>
      <div>
        <p className="bg-gray-100  p-[10px] text-lg font-semibold">
          Filter Products By
        </p>

        {/* category */}
        <div className="border  p-4 mt-8 shadow-md rounded-md">
          <p className="border-b-[1px] pb-3 text-lg font-semibold">Category</p>
          <ul className="space-y-3 mt-4">
            <li className=" flex justify-between items-center border border-[#F2F3F4] py-[9px] px-[18px] rounded hover:border-[#BCE3C9] hover:text-[#BCE3C9] hover:shadow-md duration-300 ">
              <Link to={"#"} className="flex items-center gap-2">
                <img src={cat1} alt="" className="h-[25px] w-[25px]" />
                <p className="text-sm"> Milks & Dairies</p>
              </Link>
              <span className="bg-[#BCE3C9] text-xs h-[24px] w-[24px] text-black p-1 flex items-center rounded-full">
                30
              </span>
            </li>
            <li className=" flex justify-between items-center border border-[#F2F3F4] py-[9px] px-[18px] rounded hover:border-[#BCE3C9] hover:text-[#BCE3C9] hover:shadow-md duration-300 ">
              <Link to={"#"} className="flex items-center gap-2">
                <img src={cat1} alt="" className="h-[25px] w-[25px]" />
                <p className="text-sm"> Milks & Dairies</p>
              </Link>
              <span className="bg-[#BCE3C9] text-xs h-[24px] w-[24px] text-black p-1 flex items-center rounded-full">
                30
              </span>
            </li>
            <li className=" flex justify-between items-center border border-[#F2F3F4] py-[9px] px-[18px] rounded hover:border-[#BCE3C9] hover:text-[#BCE3C9] hover:shadow-md duration-300 ">
              <Link to={"#"} className="flex items-center gap-2">
                <img src={cat1} alt="" className="h-[25px] w-[25px]" />
                <p className="text-sm"> Milks & Dairies</p>
              </Link>
              <span className="bg-[#BCE3C9] text-xs h-[24px] w-[24px] text-black p-1 flex items-center rounded-full">
                30
              </span>
            </li>
            <li className=" flex justify-between items-center border border-[#F2F3F4] py-[9px] px-[18px] rounded hover:border-[#BCE3C9] hover:text-[#BCE3C9] hover:shadow-md duration-300 ">
              <Link to={"#"} className="flex items-center gap-2">
                <img src={cat1} alt="" className="h-[25px] w-[25px]" />
                <p className="text-sm"> Milks & Dairies</p>
              </Link>
              <span className="bg-[#BCE3C9] text-xs h-[24px] w-[24px] text-black p-1 flex items-center rounded-full">
                30
              </span>
            </li>
            <li className=" flex justify-between items-center border border-[#F2F3F4] py-[9px] px-[18px] rounded hover:border-[#BCE3C9] hover:text-[#BCE3C9] hover:shadow-md duration-300 ">
              <Link to={"#"} className="flex items-center gap-2">
                <img src={cat1} alt="" className="h-[25px] w-[25px]" />
                <p className="text-sm"> Milks & Dairies</p>
              </Link>
              <span className="bg-[#BCE3C9] text-xs h-[24px] w-[24px] text-black p-1 flex items-center rounded-full">
                30
              </span>
            </li>
          </ul>
        </div>

        {/* Fill by price */}
        <div className="border  p-4 mt-4 shadow-md rounded-md">
          <p className="border-b-[1px] py-3 text-lg font-semibold">
            Fill by price
          </p>
          <p className="text-red-600 font-bold text-2xl">price</p>
          <div className="my-3">
            <p className="text-sm font-semibold">Color</p>
            <ul className="space-y-3 mt-2">
              <li>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                  >
                    Red <span>(56)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                  >
                    Green <span>(23)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                  >
                    Blue <span>(26)</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <div className="my-3">
            <p className="text-sm font-semibold">Item Condition</p>
            <ul className="space-y-3 mt-2">
              <li>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                  >
                    New <span>(1056)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                  >
                    Refurbished <span>(28)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                  >
                    Used <span>(46)</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterProduct;
