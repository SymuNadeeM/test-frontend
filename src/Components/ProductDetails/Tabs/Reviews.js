import React from "react";
import author1 from "../../../Assets/Images/author-2.png";
import author2 from "../../../Assets/Images/author-3.png";
import author3 from "../../../Assets/Images/author-4.png";

const Reviews = () => {
  return (
    <>
      <div className="p-4 grid md:grid-cols-3 gap-4">
        <div className="grid md:col-span-2 space-y-4">
          <div>
            <h5 className="text-lg font-semibold text-gray-700">
              Customer questions & answers
            </h5>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 border p-6 rounded-xl">
              <div className="text-center space-y-1">
                <img src={author2} alt="" className="" />
                <div>
                  <p className="text-xs font-semibold text-[#3BB77E]">Sienna</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-xs text-gray-400">
                    December 4, 2022 at 3:12 pm
                  </p>
                  <div className="flex items-center text-[8px] gap-1">
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                  </div>
                </div>
                <p className="text-sm  text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex
                  recusandae, aliquid soluta vero repellat facilis, doloribus
                  minima quo error est nesciunt natus voluptatibus sunt non unde
                  quidem alias porro repellendus labore dolorum. Distinctio,
                  laborum.
                </p>
              </div>
            </div>
            <div className="flex gap-4 ml-6 border p-6 rounded-xl">
              <div className="text-center space-y-1">
                <img src={author1} alt="" className="" />
                <div>
                  <p className="text-xs font-semibold text-[#3BB77E]">Sienna</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-xs text-gray-400">
                    December 4, 2022 at 3:12 pm
                  </p>
                  <div className="flex items-center text-[8px] gap-1">
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                  </div>
                </div>
                <p className="text-sm  text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex
                  recusandae, aliquid soluta vero repellat facilis, doloribus
                  minima quo error est nesciunt natus voluptatibus sunt non unde
                  quidem alias porro repellendus labore dolorum. Distinctio,
                  laborum.
                </p>
              </div>
            </div>
            <div className="flex gap-4 border p-6 rounded-xl">
              <div className="text-center space-y-1">
                <img src={author3} alt="" className="" />
                <div>
                  <p className="text-xs font-semibold text-[#3BB77E]">Sienna</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-xs text-gray-400">
                    December 4, 2022 at 3:12 pm
                  </p>
                  <div className="flex items-center text-[8px] gap-1">
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                  </div>
                </div>
                <p className="text-sm  text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex
                  recusandae, aliquid soluta vero repellat facilis, doloribus
                  minima quo error est nesciunt natus voluptatibus sunt non unde
                  quidem alias porro repellendus labore dolorum. Distinctio,
                  laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full md:col-span-1">
          <div className=" space-y-4">
            <div>
              <h5 className="text-lg font-semibold text-gray-700">
                Customer reviews
              </h5>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center text-[8px] gap-1">
                <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
                <i className="fa-sharp fa-solid fa-star text-yellow-400"></i>
              </div>
              <p className="text-gray-500  text-sm font-semibold">
                4.8 out of 5
              </p>
            </div>
            {/* prograss bar */}
            <div className=" space-y-2">
              <div className="flex  items-center gap-4">
                <div>
                  <span className=" block text-xs text-gray-500">5 Star</span>
                </div>

                <div class="w-5/6  bg-gray-100 rounded-r-md h-3 dark:bg-gray-700">
                  <div class="bg-[#3BB77E] h-3 flex items-center w-1/2  text-xs text-white text-[10px] justify-center">
                    50%
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <span className=" block text-xs text-gray-500">4 Star</span>
                </div>

                <div class="w-5/6  bg-gray-100 rounded-r-md h-3 dark:bg-gray-700">
                  <div class="bg-[#3BB77E] h-3 flex items-center w-1/3  text-xs text-white text-[10px] justify-center">
                    25%
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <span className=" block text-xs text-gray-500">3 Star</span>
                </div>

                <div class="w-5/6  bg-gray-100 rounded-r-md h-3 dark:bg-gray-700">
                  <div class="bg-[#3BB77E] h-3 flex items-center w-2/5  text-xs text-white text-[10px] justify-center">
                    45%
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <span className=" block text-xs text-gray-500">2 Star</span>
                </div>

                <div class="w-5/6  bg-gray-100 rounded-r-md h-3 dark:bg-gray-700">
                  <div class="bg-[#3BB77E] h-3 flex items-center w-3/5  text-xs text-white text-[10px] justify-center">
                    65%
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <span className=" block text-xs text-gray-500">1 Star</span>
                </div>

                <div class="w-5/6  bg-gray-100 rounded-r-md h-3 dark:bg-gray-700">
                  <div class="bg-[#3BB77E] h-3 flex items-center w-4/5  text-xs text-white text-[10px] justify-center">
                    85%
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

export default Reviews;
