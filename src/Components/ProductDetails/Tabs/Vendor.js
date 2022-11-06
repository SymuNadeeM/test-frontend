import React from "react";
import vendor from "../../../Assets/Images/vendor-18.svg";

const Vendor = () => {
  return (
    <>
      <div className="p-4 rounded-lg space-y-6">
        <div className="flex items-center gap-3">
          <img src={vendor} alt="" className="w-[64px] h-[34px]" />
          <div>
            <p className="text-md font-semibold text-[#3BB77E]">Noodies Co.</p>
            <div className="flex items-center text-xs gap-1">
              <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
              <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
              <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
              <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
              <i className="fa-regular fa-star-half-stroke text-yellow-400"></i>
              <div>
                <p className="inline-block text-gray-500">(32 review)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2">
          <div className="flex  gap-2 text-sm ">
            <i className="fa-solid fa-location-dot text-[#3BB77E] "></i>
            <p className="text-sm text-gray-500">
              <strong>Address:</strong> 5171 W Campbell Ave undefined Kent, Utah
              53127 United States
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm ">
            <i className="fa-regular fa-address-card text-[#3BB77E]"></i>
            <p className="text-sm text-gray-500">
              <strong>Contact Seller:</strong> (+91) - 540-025-553
            </p>
          </div>
        </div>
        <div className="flex items-center py-3 gap-3">
          <div>
            <p className="text-xs text-[#3BB77E]">Rating</p>
            <h5 className="text-gray-700 text-xl font-bold">92%</h5>
          </div>
          <div>
            <p className="text-xs text-[#3BB77E]">Ship on time</p>
            <h5 className="text-gray-700 text-xl font-bold">100%</h5>
          </div>
          <div>
            <p className="text-xs text-[#3BB77E]">Chat response</p>
            <h5 className="text-gray-700 text-xl font-bold">89%</h5>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            Noodles & Company is an American fast-casual restaurant that offers
            international and American noodle dishes and pasta in addition to
            soups and salads. Noodles & Company was founded in 1995 by Aaron
            Kennedy and is headquartered in Broomfield, Colorado. The company
            went public in 2013 and recorded a $457 million revenue in 2017.In
            late 2018, there were 460 Noodles & Company locations across 29
            states and Washington, D.C.
          </p>
        </div>
      </div>
    </>
  );
};

export default Vendor;
