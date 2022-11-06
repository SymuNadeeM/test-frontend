import React from "react";
import icon1 from "../../Assets/Images/icon-01.svg";
import icon2 from "../../Assets/Images/icon-02.svg";
import icon3 from "../../Assets/Images/icon-04.svg";
import icon4 from "../../Assets/Images/icon-05.svg";
import icon5 from "../../Assets/Images/icon-06.svg";

const Services = () => {
  return (
    <>
      <div className="container mt-6 mx-auto px-4">
        {/* <div className=" border-b-[.85px] py-4">
          <h2 className="font-bold text-2xl text-gray-600">Services</h2>
        </div> */}

        <div className="grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div
            className="flex items-center gap-2 border p-3 rounded-lg bg-[#F4F6FA]
          "
          >
            <div>
              <img
                src={icon1}
                alt=""
                className="w-[60px] h-[40px] md:w-[80px] md:h-[60px]"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                Best prices & offers
              </h3>

              <p className="text-sm text-gray-400">Orders $50 or more</p>
            </div>
          </div>
          <div
            className="flex items-center gap-2 border p-3 rounded-lg bg-[#F4F6FA]
          "
          >
            <div>
              <img
                src={icon2}
                alt=""
                className="w-[60px] h-[40px] md:w-[80px] md:h-[60px]"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                Free delivery
              </h3>

              <p className="text-sm text-gray-400">24/7 amazing services</p>
            </div>
          </div>
          <div
            className="flex items-center gap-2 border p-3 rounded-lg bg-[#F4F6FA]
          "
          >
            <div>
              <img
                src={icon4}
                alt=""
                className="w-[60px] h-[40px] md:w-[80px] md:h-[60px]"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                Great daily deal
              </h3>

              <p className="text-sm text-gray-400">When you sign up</p>
            </div>
          </div>
          <div
            className="flex items-center gap-2 border p-3 rounded-lg bg-[#F4F6FA]
          "
          >
            <div>
              <img
                src={icon3}
                alt=""
                className="w-[60px] h-[40px] md:w-[80px] md:h-[60px]"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                Wide assortment
              </h3>

              <p className="text-sm text-gray-400">Mega Discounts</p>
            </div>
          </div>
          <div
            className="flex items-center gap-2 border p-3 rounded-lg bg-[#F4F6FA]
          "
          >
            <div>
              <img
                src={icon5}
                alt=""
                className="w-[60px] h-[40px] md:w-[80px] md:h-[60px]"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                Easy returns
              </h3>

              <p className="text-sm text-gray-400">Within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
