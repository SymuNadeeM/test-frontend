import React from "react";
import { Link } from "react-router-dom";

const UserAddress = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-6">
          <div className="grid col-span-1 space-y-10">
            <h4 className="text-gray-700 text-2xl font-bold">
              Billing Address
            </h4>
            <div className="text-sm text-gray-500 space-y-2">
              <p>
                3522 Interstate <br />
                75 Business Spur,
                <br />
                Sault Ste.
                <br />
                Marie, MI 49783
              </p>
              <p>New York</p>
              <Link to={"#"} className="text-green-500">
                Edit
              </Link>
            </div>
          </div>
          <div className="grid col-span-1 space-y-10">
            <h4 className="text-gray-700 text-2xl font-bold">
              Shipping Address{" "}
            </h4>
            <div className="text-sm text-gray-500 space-y-2">
              <p>
                3522 Interstate <br />
                75 Business Spur,
                <br />
                Sault Ste.
                <br />
                Marie, MI 49783
              </p>
              <p>New York</p>
              <Link to={"#"} className="text-green-500">
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAddress;
