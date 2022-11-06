import React, { useState } from "react";

const DetailsPage = () => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="space-y-4 p-5">
        <div>
          <span className="text-xs font-normal px-2 rounded-md bg-red-200 text-red-700">
            Sale Off
          </span>
        </div>
        <div>
          <h3 className="text-gray-700 font-bold text-3xl">
            Seeds of Change Organic Quinoa, Brown
          </h3>
        </div>
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
        <div className=" flex gap-2 items-center">
          <h4 className="text-green-700 text-3xl font-bold"> $38</h4>
          <div>
            <p className="text-xs text-yellow-500">26% Off</p>
            <del className="text-xl font-bold text-gray-500">$52</del>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus
            dolore impedit fuga eum eligendi. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Aliquam rem officia, corrupti
            reiciendis minima nisi modi, quasi, odio minus
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <p className=" text-sm text-gray-600">
            Size/<strong>Weight:</strong>
          </p>
          <ul className="flex gap-2 items-center">
            <li className="hover:bg-green-600 hover:text-white duration-200 p-1 rounded-md text-sm">
              50gm
            </li>
            <li className="hover:bg-green-600 hover:text-white duration-200 p-1 rounded-md text-sm">
              60gm
            </li>
            <li className="hover:bg-green-600 hover:text-white duration-200 p-1 rounded-md text-sm">
              80gm
            </li>
            <li className="hover:bg-green-600 hover:text-white duration-200 p-1 rounded-md text-sm">
              100gm
            </li>
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center  gap-4 border px-5 py-1  rounded-md border-green-600">
            <div>
              <p className="text-md">{count}</p>
            </div>
            <div className="flex flex-col text-xs">
              <button onClick={increment}>
                <i className="fa-solid fa-angle-up"></i>
              </button>
              <button onClick={decrement}>
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>
          </div>

          <div>
            <p className="bg-green-500 p-1 px-3 py-2 rounded-md text-white">
              Add to cart
            </p>
          </div>
          <div>
            <i className="fa-regular fa-heart border rounded-md p-3  hover:bg-green-400 duration-200 hover:text-white "></i>
          </div>
          <div>
            <i className="fa-solid fa-code-compare border rounded-md p-3 hover:bg-green-400 duration-200 hover:text-white"></i>
          </div>
        </div>
      </div>
      <div className="flex mt-5 gap-4 md:mt-7 text-sm p-5">
        <div className="space-y-2">
          <p>
            Type:<span className="text-green-600"> Organic</span>
          </p>
          <p>
            MFG:<span className="text-green-600"> Jun 4,2022</span>
          </p>
          <p>
            LIFE:<span className="text-green-600"> 70 days</span>
          </p>
        </div>
        <div className="space-y-2">
          <p>
            SKU:<span className="text-green-600"> FWSDL24SDD</span>
          </p>
          <p>
            Tags:<span className="text-green-600"> Snack, Organic, Brown</span>
          </p>
          <p>
            Stock:<span className="text-green-600"> 8 Items In Stock</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
