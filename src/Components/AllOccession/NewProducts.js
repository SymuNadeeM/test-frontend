import {
  faBasketShopping,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import NewData from "./NewProductData";

const NewProducts = () => {
  return (
    <>
      <div>
        <div className=" border-b-[.85px] py-4">
          <div className="flex flex-col md:flex-row justify-between">
            <h2 className="font-bold text-2xl text-gray-600">New Products</h2>
            <div className="flex gap-5 mt-3 md:mt-0 uppercase text-gray-500 font-normal text-sm md:font-semibold items-center ">
              <Link to={"#"} className="hover:text-[#ff909d] duration-300">
                All
              </Link>
              <Link to={"#"} className="hover:text-[#ff909d] duration-300">
                {" "}
                clothes
              </Link>
              <Link to={"#"} className="hover:text-[#ff909d] duration-300">
                {" "}
                Footwear
              </Link>
              <Link to={"#"} className="hover:text-[#ff909d] duration-300">
                {" "}
                accessories
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5  gap-3 md:gap-8">
          {NewData.map((newitems) => {
            return (
              <div key={newitems.id} className=" mt-[30px]">
                <div className=" w-full border-[.85px] p-4 rounded-3xl border-gray-200 group">
                  <div className="w-full relative">
                    <img src={newitems.images} alt="" />
                    <span className="bg-green-500 rounded-lg px-2 text-white absolute top-0 left-[5px] text-sm">
                      15%
                    </span>
                    <div className="absolute space-y-2 top-[5px] right-[5px] opacity-0 group-hover:opacity-100 transition ">
                      <div>
                        <Link to={"#"}>
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="text-lg border-[.85px] p-2 rounded-xl border-gray-200 hover:bg-gray-700 duration-300 text-[#FD841F] hover:text-[#fff]"
                          />
                        </Link>
                      </div>
                      <div>
                        <Link to={"#"}>
                          <FontAwesomeIcon
                            icon={faEye}
                            className="text-lg border-[.85px] p-2 rounded-xl border-gray-200 hover:bg-gray-700 duration-300 text-[#FD841F] hover:text-[#fff]"
                          />
                        </Link>
                      </div>
                      <div>
                        <Link to={"#"}>
                          <FontAwesomeIcon
                            icon={faBasketShopping}
                            className="text-lg border-[.85px] p-2 rounded-xl border-gray-200 hover:bg-gray-700 duration-300 text-[#FD841F] hover:text-[#fff]"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* descriptions */}
                  <div className="space-y-2">
                    <p className="text-[#ff909d] font-medium uppercase ">
                      {newitems.name}
                    </p>
                    <p className="text-gray-400 tracking-wide font-normal">
                      {newitems.dep}
                    </p>
                    <div className="flex  items-center">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-xs text-[#FD841F]"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-xs text-[#FD841F]"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-xs text-[#FD841F]"
                      />

                      <FontAwesomeIcon icon={faStar} className="text-xs " />
                      <FontAwesomeIcon icon={faStar} className="text-xs " />
                    </div>
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
      </div>
    </>
  );
};

export default NewProducts;
