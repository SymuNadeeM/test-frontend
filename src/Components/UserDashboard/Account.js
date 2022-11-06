import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Account = () => {
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
      <div className="px-5">
        <div className="space-y-4">
          <h4 className="text-gray-700 text-2xl font-bold">Account Details</h4>
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-green-400">
              Log in instead!
            </Link>{" "}
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="flex items-center gap-5 w-5/6">
              <div className="w-1/2">
                <label htmlFor="" className="text-sm text-gray-500">
                  First Name
                </label>
                <input
                  {...register("firstname")}
                  className=" outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="" className="text-sm text-gray-500">
                  Last Name
                </label>
                <input
                  {...register("lastname")}
                  className=" outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-sm text-gray-500">
                Display Name*
              </label>
              <input
                {...register("displayname")}
                className=" outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5  "
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm text-gray-500">
                Email Address*
              </label>
              <input
                {...register("emailaddress", { required: true })}
                className=" outline-none border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5  "
              />
              {errors.emailaddress && <p>emailaddress is required.</p>}
            </div>
            <div>
              <label htmlFor="" className="text-sm text-gray-500">
                Current Password*
              </label>
              <input
                {...register("currentpassword", { required: true })}
                className=" outline-none border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5  "
              />
              {errors.currentpassword && <p>emailaddress is required.</p>}
            </div>
            <div>
              <label htmlFor="" className="text-sm text-gray-500">
                New Password*
              </label>
              <input
                {...register("newpassword", { required: true })}
                className=" outline-none border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5  "
              />
              {errors.newpassword && <p>emailaddress is required.</p>}
            </div>
            <div>
              <label htmlFor="" className="text-sm text-gray-500">
                Confirm Password*
              </label>
              <input
                {...register("confirmpassword", { required: true })}
                className=" outline-none border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5  "
              />
              {errors.confirmpassword && <p>emailaddress is required.</p>}
            </div>

            <button
              type="submit"
              className="text-white bg-gray-900 hover:bg-[#3bb77c] duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save Change
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Account;
