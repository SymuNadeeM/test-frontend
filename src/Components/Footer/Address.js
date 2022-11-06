import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMapLocation, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Address = () => {
  return (
    <>
      <div className="border-b-[.85px] border-[#787878]">
        <div className="container mx-auto px-4">
          <div className="grid my-8 px-4 grid-cols-2  gap-12 w-full md:grid-cols-3 xl:grid-cols-5">
            <div>
              <h2 className="text-white border-b border-[#ff909d] font-bold pt-8 pb-4">
                BRANDS DIRECTORY
              </h2>
              <div className="pt-4  text-[#787878]">
                <p className="hover:text-[#ff909d] duration-200">Fashion</p>
                <p className="hover:text-[#ff909d] duration-200">Electronic</p>
                <p className="hover:text-[#ff909d] duration-200">Cosmetic</p>
                <p className="hover:text-[#ff909d] duration-200">Health</p>
                <p className="hover:text-[#ff909d] duration-200">Watches</p>
              </div>
            </div>
            <div>
              <h2 className="text-white border-b border-[#ff909d] font-bold pt-8 pb-4">
                PRODUCTS
              </h2>
              <div className="pt-4  text-[#787878]">
                <p className="hover:text-[#ff909d] duration-200">Prices drop</p>
                <p className="hover:text-[#ff909d] duration-200">
                  New products
                </p>
                <p className="hover:text-[#ff909d] duration-200">Best sales</p>
                <p className="hover:text-[#ff909d] duration-200">Contact us</p>
                <p className="hover:text-[#ff909d] duration-200">Sitemap</p>
              </div>
            </div>
            <div>
              <h2 className="text-white border-b border-[#ff909d] font-bold pt-8 pb-4">
                OUR COMPANY
              </h2>
              <div className="pt-4  text-[#787878]">
                <p className="hover:text-[#ff909d] duration-200">Prices drop</p>
                <p className="hover:text-[#ff909d] duration-200">
                  New products
                </p>
                <p className="hover:text-[#ff909d] duration-200">Best sales</p>
                <p className="hover:text-[#ff909d] duration-200">Contact us</p>
                <p className="hover:text-[#ff909d] duration-200">Sitemap</p>
              </div>
            </div>
            <div>
              <h2 className="text-white border-b border-[#ff909d] font-bold pt-8 pb-4">
                SERVICES
              </h2>
              <div className="pt-4  text-[#787878]">
                <p className="hover:text-[#ff909d] duration-200">Prices drop</p>
                <p className="hover:text-[#ff909d] duration-200">
                  New products
                </p>
                <p className="hover:text-[#ff909d] duration-200">Best sales</p>
                <p className="hover:text-[#ff909d] duration-200">Contact us</p>
                <p className="hover:text-[#ff909d] duration-200">Sitemap</p>
              </div>
            </div>
            <div>
              <h2 className="text-white border-b border-[#ff909d] font-bold pt-8 pb-4">
                CONTACT
              </h2>
              <div className="pt-4  text-[#787878] space-y-3">
                <div className="flex ">
                  <FontAwesomeIcon
                    icon={faMapLocation}
                    className="mr-2 text-xl"
                  />
                  <div className="block ">
                    <p>2548 Broaddus Maple Court, Madisonville KY 4783,USA</p>
                  </div>
                </div>
                <div className="flex items-center ">
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-xl" />

                  <p>+91 099 3655610</p>
                </div>
                <div className="flex items-center ">
                  <FontAwesomeIcon icon={faMessage} className="mr-2 text-xl" />
                  <p>support@gami.com</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-8">
                <Link to="#">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-gray-500  mr-1 w-[24px] h-[26px]  rounded-lg  duration-500 hover:text-[#ff909d]"
                  />
                </Link>
                <Link to={"#"}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-gray-500  mr-1 w-[24px] h-[26px]  rounded-lg  duration-500 hover:text-[#ff909d]"
                  />
                </Link>
                <Link to={"#"}>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-gray-500  mr-1 w-[24px] h-[26px]  rounded-lg  duration-500 hover:text-[#ff909d]"
                  />
                </Link>
                <Link to={"#"}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-gray-500  mr-1 w-[24px] h-[26px]  rounded-lg  duration-500 hover:text-[#ff909d]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
