import React from "react";
import fashion1 from "../../Assets/Images/card1.jpg";
import fashion2 from "../../Assets/Images/card2.jpg";
import fashion3 from "../../Assets/Images/card3.jpg";
import fashion4 from "../../Assets/Images/card4.jpg";

const Fashion = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid my-8 gap-8 w-full md:grid-cols-2 xl:grid-cols-4">
          <div className="mt-8 ">
            <img src={fashion1} alt="" className="rounded-3xl" />
            <div className="my-2">
              <p className="text-[#ff909d]">Clothes</p>
              <h4 className="font-bold text-gray-700">
                Clothes Raiting Fashion Trends: Digital TO The Revenue.
              </h4>
              <p className="text-gray-600">By Mr Robin / Apr 20, 2020</p>
            </div>
          </div>
          <div className="mt-8">
            <img src={fashion2} alt="" className="rounded-3xl" />
            <div className="my-2">
              <p className="text-[#ff909d]">Clothes</p>
              <h4 className="font-bold text-gray-700">
                Clothes Raiting Fashion Trends: Digital TO The Revenue.
              </h4>
              <p className="text-gray-600">By Mr Robin / Apr 20, 2020</p>
            </div>
          </div>
          <div className="mt-8">
            <img src={fashion3} alt="" className="rounded-3xl" />
            <div className="my-2">
              <p className="text-[#ff909d]">Clothes</p>
              <h4 className="font-bold text-gray-700">
                Clothes Raiting Fashion Trends: Digital TO The Revenue.
              </h4>
              <p className="text-gray-600">By Mr Robin / Apr 20, 2020</p>
            </div>
          </div>
          <div className="mt-8">
            <img src={fashion4} alt="" className="rounded-3xl" />
            <div className="my-2">
              <p className="text-[#ff909d]">Clothes</p>
              <h4 className="font-bold text-gray-700">
                Clothes Raiting Fashion Trends: Digital TO The Revenue.
              </h4>
              <p className="text-gray-600">By Mr Robin / Apr 20, 2020</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fashion;
