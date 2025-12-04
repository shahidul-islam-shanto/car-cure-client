import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ServiceCard = ({ services }) => {
  const { title, img, price, _id } = services;
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  return (
    <>
      <div className="px-6 py-6 border-2 border-nu60 rounded-lg">
        <img className="w-full h-[260px] rounded-xl mb-6" src={img} alt="" />

        <h4 className="mb-3">{title}</h4>
        <div className="flex justify-between items-center">
          <p className="text-primary1">Price: ${price}</p>
          <div className="">
            <Link to={`/servicesDetails/${_id}`}>
              <button>
                <FaArrowRight className="text-[18px]" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
