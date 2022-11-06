import React from "react";

const Proselect = () => {
  return (
    <>
      <div className=" flex items-center gap-4">
        <p className="text-gray-500">Sort by</p>
        <form action="" className="px-2 bg-white">
          <select
            id="underline_select"
            className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>
              <div>
                <p>Name,A to Z a</p>
              </div>
            </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
      </div>
    </>
  );
};

export default Proselect;
