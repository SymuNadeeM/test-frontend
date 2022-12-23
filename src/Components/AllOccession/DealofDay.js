import {
  faLongArrowLeft,
  faLongArrowRight,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import jewell from "../../Assets/Images/AllOcce/jewel3.jpg";

const DealofDay = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center border-b-[.85px] py-4">
          <h2 className="font-bold text-2xl text-gray-600">Deal Of The Day</h2>
          <div>
            <FontAwesomeIcon icon={faLongArrowLeft} className="mr-2" />
            <FontAwesomeIcon icon={faLongArrowRight} />
          </div>
        </div>
        {/* main_part */}
        <div className="border-[.85px] my-5 flex p-[30px] rounded-3xl border-gray-200">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <div>
                <img src={jewell} alt="" className="w-[393px] h-[343px]" />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-1.5">
              <div className="flex  items-center">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm text-[#FD841F]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm text-[#FD841F]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm text-[#FD841F]"
                />
                <FontAwesomeIcon
                  icon={faStarHalf}
                  className="text-sm text-[#FD841F]"
                />
                <FontAwesomeIcon icon={faStar} className="text-sm " />
              </div>
              <h5 className="font-bold uppercase">
                Rose gold diamonds earring
              </h5>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
                quisquam! Molestiae voluptates fugiat soluta. Soluta vitae atque
              </p>
              <h4 className="text-xl font-bold text-[#ff909d]">
                $1990.00{" "}
                <span>
                  <del className="text-gray-400">$2000.00</del>
                </span>
              </h4>
              <button className="uppercase py-2 px-5 bg-[#ff909d] text-white rounded-xl tracking-wide font-bold ">
                Add to cart
              </button>
              <div className="flex items-center justify-between">
                <p className="uppercase">
                  already sold : <strong>15</strong>
                </p>
                <p className="uppercase">
                  available : <strong>40</strong>
                </p>
              </div>
              <div className="bg-gray-300 w-full h-[8px] rounded-lg">
                <div className="bg-[#ff909d] w-1/3 h-[6px] rounded-lg p-1"></div>
              </div>
              <p className="uppercase font-semibold">
                hurry up! offer ends in:
              </p>
              {/* timer */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="w-[56px] h-[56px] flex items-center justify-center p-5 bg-[#ff909d] rounded-lg">
                  <div className="text-center">
                    <p className=" font-serif font-bold text-lg text-white">
                      150
                    </p>
                    <p className=" font-mono font-semibold text-xs text-white">
                      Days
                    </p>
                  </div>
                </div>
                <div className="w-[56px] h-[56px] flex items-center justify-center p-5 bg-[#ff909d] rounded-lg">
                  <div className="text-center">
                    <p className=" font-serif font-bold text-lg text-white">
                      6
                    </p>
                    <p className=" font-mono font-semibold text-xs text-white">
                      Hours
                    </p>
                  </div>
                </div>
                <div className="w-[56px] h-[56px] flex items-center justify-center p-5 bg-[#ff909d] rounded-lg">
                  <div className="text-center">
                    <p className=" font-serif font-bold text-lg text-white">
                      13
                    </p>
                    <p className=" font-mono font-semibold text-xs text-white">
                      Minutes
                    </p>
                  </div>
                </div>
                <div className="w-[56px] h-[56px] flex items-center justify-center p-5 bg-[#ff909d] rounded-lg">
                  <div className="text-center">
                    <p className=" font-serif font-bold text-lg text-white">
                      41
                    </p>
                    <p className=" font-mono font-semibold text-xs text-white">
                      Seconds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealofDay;
<h1>fsad</h1>;
