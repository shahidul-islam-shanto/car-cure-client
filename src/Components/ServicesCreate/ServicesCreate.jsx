import React from "react";

const ServicesCreate = ({ serviceDetails }) => {
  const { img } = serviceDetails;

  return (
    <>
      <div className="">
        <img src={img} alt="" />
      </div>
    </>
  );
};

export default ServicesCreate;
