import React from "react";
import { Link } from "react-router-dom";
import cpic1 from "../../Assets/Images/AllOcce/purepng.com-photo-cameraphoto-camera.png";
import cpic2 from "../../Assets/Images/AllOcce/slid2.png";
import cpic3 from "../../Assets/Images/AllOcce/slid_4.png";
import cpic4 from "../../Assets/Images/AllOcce/swatch1.png";

const EcCategories = () => {
  return (
    <>
      <section className="my-[60px]">
        <div className="container flex items-center mx-auto px-4">
          <div className="grid gap-8 grid-cols-2 w-full md:grid-cols-2 xl:grid-cols-4">
            <div className="flex items-center border-[.85px] p-3 rounded-3xl border-gray-200">
              <div className="bg-blue-100 p-3 border border-blue-300 rounded-2xl mr-3">
                <img
                  src={cpic1}
                  alt=""
                  className="w-[40px] h-[32px] rounded-lg"
                />
              </div>

              <div className="w-full">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-md text-gray-600">
                    SunGlass
                  </h4>
                  <span className="font-md text-sm text-gray-600">(64)</span>
                </div>
                <div>
                  <Link to={"#"} className="text-[#ff909d] ">
                    See all..
                  </Link>
                </div>
              </div>
            </div>
            {/* ............. */}
            <div className="flex items-center border-[.85px] p-3 rounded-3xl border-gray-200">
              <div className="bg-pink-100 p-3 border border-pink-300 rounded-2xl mr-3">
                <img
                  src={cpic2}
                  alt=""
                  className="w-[40px] h-[32px] rounded-lg"
                />
              </div>

              <div className="w-full">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-md text-gray-600">
                    SunGlass
                  </h4>
                  <span className="font-md text-sm text-gray-600">(64)</span>
                </div>
                <div>
                  <Link to={"#"} className="text-[#ff909d] ">
                    See all..
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center border-[.85px] p-3 rounded-3xl border-gray-200">
              <div className="bg-yellow-100 p-3 border border-yellow-300 rounded-2xl mr-3">
                <img
                  src={cpic3}
                  alt=""
                  className="w-[40px] h-[32px] rounded-lg"
                />
              </div>

              <div className="w-full">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-md text-gray-600">
                    SunGlass
                  </h4>
                  <span className="font-md text-sm text-gray-600">(64)</span>
                </div>
                <div>
                  <Link to={"#"} className="text-[#ff909d] ">
                    See all..
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center border-[.85px] p-3 rounded-3xl border-gray-200">
              <div className="bg-green-100 p-3 border border-green-300 rounded-2xl mr-3">
                <img
                  src={cpic4}
                  alt=""
                  className="w-[40px] h-[32px] rounded-lg"
                />
              </div>

              <div className="w-full">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-md text-gray-600">
                    SunGlass
                  </h4>
                  <span className="font-md text-sm text-gray-600">(64)</span>
                </div>
                <div>
                  <Link to={"#"} className="text-[#ff909d] ">
                    See all..
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcCategories;
