import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
// import useServices from "../../Hooks/useServices";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-mauve.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      });
  }, []);

  // const services = useServices();

  return (
    <>
      <div className="pb-20">
        <div className="container-2">
          <div className="">
            <div className="text-center">
              <h5 className="text-primary1 mb-3">Service</h5>
              <h1 className=" mb-4">Our Service Area</h1>
              <p className="mb-10">
                the majority have suffered alteration in some form, by injected
                humour, or randomised <br /> words which don't look even
                slightly believable.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-6 mb-14">
              {services.map((items) => (
                <div key={items._id} className="col-span-4">
                  <ServiceCard services={items} />
                </div>
              ))}
            </div>
            <div className="text-center ">
              <button className="px-6 py-2 rounded-lg border-2 border-primary1 text-primary1">
                More Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
