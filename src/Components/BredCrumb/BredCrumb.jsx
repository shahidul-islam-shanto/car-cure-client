import React from "react";
import "./BredCrumb.css";
import checkout from "../../assets/images/checkout/checkout.png";

const BredCrumb = ({ bradCrumb }) => {
  return (
    <>
      <div className="">
        <div className="relative ">
          <img src={checkout} className="w-full " />
          <div className="absolute inset-0 bg-[linear-gradient(91deg,rgba(6,7,7,0.753)_0.97%,rgba(2,2,2,0.897)_100%)]"></div>
        </div>
        <div className="">
          <h1 className="absolute top-80 left-60 text-nu10 text-center">
            {bradCrumb}
          </h1>
        </div>
      </div>
    </>
  );
};

export default BredCrumb;
