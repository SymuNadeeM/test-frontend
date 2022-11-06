import React from "react";
import { useForm } from "react-hook-form";

const TrackOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="space-y-4">
        <div>
          <h2 className="text-gray-700 text-2xl font-bold">Orders tracking</h2>
        </div>
        <div>
          <p className="text-sm text-gray-400">
            To track your order please enter your OrderID in the box below and
            press "Track" button. This was given to you on your receipt and in
            the confirmation email you should have received.
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <label htmlFor="" className="text-sm text-gray-500">
                Your Id
              </label>
              <input
                {...register("yourid")}
                className=" outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 md:w-3/5 p-2.5  "
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm text-gray-500">
                Email or Phone number
              </label>
              <input
                {...register("idoremai", { required: true })}
                className=" outline-none border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 md:w-3/5 p-2.5  "
              />
              {errors.lastName && <p>Last name is required.</p>}
            </div>

            <button
              type="submit"
              className="text-white bg-gray-900 hover:bg-[#3bb77c] duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 md:w-2/6 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Track
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
