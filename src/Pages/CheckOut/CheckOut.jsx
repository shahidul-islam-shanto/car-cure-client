import React from "react";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <>
      <div className="">
        <BredCrumb bradCrumb={"Check Out"} />
      </div>
      <div className="xl:py-[130px] lg:py-[110px] md:py-[90px] sm:py-[70px] py-[60px]">
        <div className="container-2">
          <form className="px-16 py-16 bg-nu60 rounded-2xl">
            <div className="grid grid-cols-12 gap-6 mb-6">
              <div className="col-span-6">
                <input
                  type="email"
                  name="email"
                  placeholder="First Name"
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Last Name"
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Phone"
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
            <div className="">
              <textarea
                name=""
                rows="10"
                placeholder="Your Message"
                className="w-full px-4 py-4 mb-4 border bg-nu10 border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>
            </div>
            <div className="">
              <Link to={""} className="px-6 py-3 bg-primary1 rounded-xl block text-center">
                <button className="text-nu10 font-semibold">
                  Order Confirm
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
