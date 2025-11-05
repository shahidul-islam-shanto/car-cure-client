import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ServicesDetails.css";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";

const ServicesDetails = () => {
  const serviceDetails = useLoaderData();

  const { img } = serviceDetails;

  return (
    <>
      <div className="">
        <BredCrumb />
        <div className="py-20">
          <div className="container-2">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8">
                <div className="">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetails;
