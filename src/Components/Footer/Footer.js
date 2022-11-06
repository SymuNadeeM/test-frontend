import React from "react";
import Address from "./Address";
import Brands from "./Brands";
import Company from "./Company";

const Footer = () => {
  return (
    <>
      <div className="bg-[#222222]">
        <Brands />
        <Address />
        <Company />
      </div>
    </>
  );
};

export default Footer;
