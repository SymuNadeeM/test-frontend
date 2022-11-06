import React from "react";
// import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 mb-5">
        <div className="flex items-center gap-3  p-5 rounded-xl bg-[#F4F6FA]">
          <i className="fa-solid fa-chart-pie text-4xl text-[#ffc107]"></i>
          <h3 className="text-sm text-gray-500 font-bold">
            Today Order Amount
          </h3>
        </div>
        <div className="flex items-center gap-3  p-5 rounded-xl bg-[#F4F6FA]">
          <i className="fa-solid fa-cannabis text-4xl text-[#ffc107]"></i>
          <h3 className="text-sm text-gray-500 font-bold">Today Order</h3>
        </div>

        <div className="flex items-center gap-3  p-5 rounded-xl bg-[#F4F6FA]">
          <i className="fa-solid fa-cannabis text-4xl text-[#ffc107]"></i>
          <h3 className="text-sm text-gray-500 font-bold">
            Total Order Amount
          </h3>
        </div>
        <div className="flex items-center gap-3  p-5 rounded-xl bg-[#F4F6FA]">
          <i className="fa-solid fa-cannabis text-4xl text-[#ffc107]"></i>
          <h3 className="text-sm text-gray-500 font-bold">
            This Month Order Amount
          </h3>
        </div>
      </div>

      <div className="shadow-md sm:rounded-lg" style={{ overflowX: "auto" }}>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Color
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">$2999</td>
            </tr>
            <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">White</td>
              <td className="py-4 px-6">Laptop PC</td>
              <td className="py-4 px-6">$1999</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">$99</td>
            </tr>
            <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Google Pixel Phone
              </th>
              <td className="py-4 px-6">Gray</td>
              <td className="py-4 px-6">Phone</td>
              <td className="py-4 px-6">$799</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch 5
              </th>
              <td className="py-4 px-6">Red</td>
              <td className="py-4 px-6">Wearables</td>
              <td className="py-4 px-6">$999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserDashboard;
