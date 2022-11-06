import React from "react";
import NewData from "../AllOccession/NewProductData";

const ProductAll = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
        {NewData.map((newitems) => {
          return (
            <div key={newitems.id} className=" mt-[30px]">
              <div className=" w-full border-[.85px] p-4 rounded-3xl border-gray-200 group">
                <div className="w-full relative">
                  <img src={newitems.images} alt="" />
                  <span className="bg-green-500 rounded-lg px-2 text-white absolute top-0 left-[5px] text-sm">
                    15%
                  </span>
                </div>
                {/* descriptions */}
                <div className="space-y-2">
                  <p className="text-[#ff909d] font-medium uppercase ">
                    {newitems.name}
                  </p>
                  <p className="text-gray-400 tracking-wide font-normal">
                    {newitems.dep}
                  </p>

                  <p>
                    <strong className="text-gray-700 font-bold">
                      {" "}
                      {newitems.price}
                    </strong>

                    <span>
                      <del className="text-gray-400 font-normal ml-2">
                        {" "}
                        {newitems.del}
                      </del>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductAll;
