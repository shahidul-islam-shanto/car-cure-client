import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.png";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="xl:py-20 md:py-18 sm:py-16 py-12 2xl:px-10 sm:px-10 px-3 overflow-hidden bg-nu20">
        <div className="container-2">
          <div className="grid grid-cols-12 lg:gap-10 md:gap-8 sm:gap-6 gap-4 mt-10">
            <div className="lg:col-span-3 sm:col-span-6 col-span-12">
              <div>
                <div className="sm:mb-5 mb-4">
                  <Link
                    to={""}
                    className="flex items-center gap-2"
                    data-aos="fade-right"
                    data-aos-duration="2200"
                  >
                    <img src={Logo} alt="" />
                  </Link>
                </div>
                <p
                  className="text-nu10 font-fontMont font-normal mb-5"
                  data-aos="fade-right"
                  data-aos-duration="2400"
                >
                  Edwin Diaz is a software and web technologies engineer, a life
                  coach trainer who is also a serial .
                </p>
                <div className="flex items-center gap-3">
                  <Link to={""}>
                    <span className="px-4 py-4 bg-secondary1 inline-block rounded-full">
                      <FaGoogle className="text-nu10 text-[20px]" />
                    </span>
                  </Link>
                  <Link to={""}>
                    <span className="px-4 py-4 bg-secondary1 inline-block rounded-full">
                      <FaTwitter className="text-nu10 text-[20px]" />
                    </span>
                  </Link>
                  <Link to={""}>
                    <span className="px-4 py-4 bg-secondary1 inline-block rounded-full">
                      <FaInstagram className="text-nu10 text-[20px]" />
                    </span>
                  </Link>
                  <Link to={""}>
                    <span className="px-4 py-4 bg-secondary1 inline-block rounded-full">
                      <FaLinkedin className="text-nu10 text-[20px]" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="xl:col-span-3 lg:col-span-3 col-span-12 sm:mt-0 mt-4">
              <div>
                <h4
                  className="text-nu10 font-fontMont mb-10"
                  data-aos="fade-right"
                  data-aos-duration="1400"
                >
                  About
                </h4>
                <ul className="">
                  <li className="text-nu10 mb-4">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="text-nu10 mb-4">
                    <Link to={"/services"}>Service</Link>
                  </li>
                  <li className="text-nu10 mb-4">
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:col-span-3 lg:col-span-2 col-span-12 md:pt-0 pt-4">
              <div>
                <h4 className="text-nu10 font-fontMont mb-10">Company</h4>
                <ul className="">
                  <li className="mb-4">
                    <Link to={"javascript:void(0)"} className="text-nu10">
                      Why Car Doctor
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to={"/about"} className="text-nu10">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:col-span-2 lg:col-span-4 col-span-12 md:pt-0 pt-4">
              <div>
                <h4 className="text-nu10 font-fontMont mb-10">Support</h4>
                <ul className="">
                  <li className="mb-4 text-nu10">
                    <Link to={""}>Support Center</Link>
                  </li>
                  <li className="mb-4 text-nu10">
                    <Link to={""}>Feedback</Link>
                  </li>
                  <li className="mb-4 text-nu10">
                    <Link to={""}>Accesbility</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
