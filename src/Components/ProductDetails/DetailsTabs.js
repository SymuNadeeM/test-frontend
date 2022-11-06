import React, { useState } from "react";
import Additionalinfo from "./Tabs/Additionalinfo";
import Description from "./Tabs/Description";
import Reviews from "./Tabs/Reviews";
import Vendor from "./Tabs/Vendor";

const DetailsTabs = () => {
  const [tabs, setTabs] = useState({ name: "description" });

  return (
    <>
      <div className="border w-full p-[35px] rounded-2xl">
        <div className="mb-4 ">
          <ul className="flex flex-wrap  -mb-px text-sm font-medium text-center">
            <li
              className="mr-2"
              role="presentation"
              onClick={() => setTabs({ name: "description" })}
            >
              <button
                className={
                  tabs.name === "description"
                    ? "inline-block  border rounded-full px-3 py-2  shadow-lg opacity-100 hover:text-gray-500 text-[#3BB77E]  border-[#75eeb6] duration-200 "
                    : "inline-block border rounded-full px-3 py-2 text-gray-500 hover:text-[#3BB77E] duration-200"
                }
              >
                Description
              </button>
            </li>

            <li
              className="mr-2 "
              onClick={() => setTabs({ name: "additionalinfo" })}
            >
              <button
                className={
                  tabs.name === "additionalinfo"
                    ? "inline-block  border rounded-full px-3 py-2  shadow-lg opacity-100 hover:text-gray-500 text-[#3BB77E]  border-[#75eeb6] duration-200 "
                    : "inline-block border rounded-full px-3 py-2 text-gray-500 hover:text-[#3BB77E] duration-200"
                }
                id="additionalinfo-tab"
                type="button"
              >
                Additional info
              </button>
            </li>

            <li className="mr-2" onClick={() => setTabs({ name: "vendor" })}>
              <button
                className={
                  tabs.name === "vendor"
                    ? "inline-block  border rounded-full px-3 py-2  shadow-lg opacity-100 hover:text-gray-500 text-[#3BB77E]  border-[#75eeb6] duration-200 "
                    : "inline-block border rounded-full px-3 py-2 text-gray-500 hover:text-[#3BB77E] duration-200"
                }
                id="vendor-tab"
                type="button"
              >
                Vendor
              </button>
            </li>

            <li
              className="mt-2 md:mt-0"
              onClick={() => setTabs({ name: "reviews" })}
            >
              <button
                className={
                  tabs.name === "reviews"
                    ? "inline-block  border rounded-full px-3 py-2  shadow-lg opacity-100 hover:text-gray-500 text-[#3BB77E]  border-[#75eeb6] duration-200 "
                    : "inline-block border rounded-full px-3 py-2 text-gray-500 hover:text-[#3BB77E] duration-200"
                }
                id="reviews-tab"
                type="button"
              >
                Reviews (3)
              </button>
            </li>
          </ul>
        </div>

        <div>
          {/* description */}
          {tabs.name === "description" && <Description />}

          {/* additionalinfo */}
          {tabs.name === "additionalinfo" && <Additionalinfo />}
          {/* vendor */}
          {tabs.name === "vendor" && <Vendor />}
          {/* reviews */}
          {tabs.name === "reviews" && <Reviews />}
        </div>
      </div>
    </>
  );
};

export default DetailsTabs;
