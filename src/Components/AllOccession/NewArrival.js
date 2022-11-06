import {
  faLongArrowLeft,
  faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AData from "./NewAData";

const NewArrival = () => {
  return (
    <>
      <div className="px-1">
        {/* title */}
        <div className="flex justify-between items-center border-b-[.85px] py-4">
          <h2 className="font-bold text-2xl text-gray-600">New Arrivals</h2>
          <div>
            <FontAwesomeIcon icon={faLongArrowLeft} className="mr-2" />
            <FontAwesomeIcon icon={faLongArrowRight} />
          </div>
        </div>
        {/* product part */}
        <div className="my-8">
          <div className="grid grid-cols-2 gap-8 w-full md:grid-cols-3 xl:grid-cols-5">
            {AData.map((aitem) => {
              return (
                <div
                  key={aitem.id}
                  className="flex items-center border-[.85px] p-3 rounded-3xl border-gray-200 my-4"
                >
                  <div className="  mr-3">
                    <img
                      src={aitem.images}
                      alt=""
                      className="w-[65px] h-[45px] md:w-[75px] md:h-[65px] rounded-lg"
                    />
                  </div>

                  <div>
                    <p className="font-semibold inline-block text-base md:text-lg text-gray-600">
                      {aitem.dep}
                    </p>
                    <span className="font-xl text-gray-600 duration-500 hover:text-[#ff909d]">
                      {aitem.name}
                    </span>
                    <p className="text-[#ff909d] font-semibold">
                      {aitem.price}
                      <span>
                        <del className="text-gray-400 ml-1">{aitem.del}</del>
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
