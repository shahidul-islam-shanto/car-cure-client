import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./ServicesDetails.css";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
import VideoPopup from "../../Components/VideoPopup/VideoPopup";
import Text from "../../Components/VideoPopup/Text";

const ServicesDetails = () => {
  const serviceDetails = useLoaderData();

  const { _id, img, price } = serviceDetails;

  return (
    <>
      <div className="">
        <BredCrumb />
        <div className="xl:py-[130px] lg:py-[110px] md:py-[90px] sm:py-[70px] py-[60px]">
          <div className="container-2">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8">
                <div className="">
                  <div className="mb-12">
                    <img
                      className="w-full h-full rounded-xl"
                      src={img}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <div className="mb-[50px]">
                      <h2 className="text-nu20 font-bold mb-8">
                        Unique Car Engine Service
                      </h2>
                      <p className="text-nu30 mb-[30px]">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
                      </p>
                      <div className="grid grid-cols-12 gap-6 mb-[30px]">
                        <div className="col-span-6">
                          <div className="px-10 py-10 border-t-2 border-primary1 bg-nu70 rounded-xl">
                            <h5 className="text-nu20 font-bold mb-3">
                              Instant Car Services
                            </h5>
                            <p className="text-nu30 font-medium">
                              It uses a dictionary of over 200 Latin words,
                              combined with a model sentence structures.
                            </p>
                          </div>
                        </div>
                        <div className="col-span-6">
                          <div className="px-10 py-10 border-t-2 border-primary1 bg-nu70 rounded-xl">
                            <h5 className="text-nu20 font-bold mb-3">
                              24/7 Quality Service
                            </h5>
                            <p className="text-nu30 font-medium">
                              It uses a dictionary of over 200 Latin words,
                              combined with a model sentence structures.
                            </p>
                          </div>
                        </div>
                        <div className="col-span-6">
                          <div className="px-10 py-10 border-t-2 border-primary1 bg-nu70 rounded-xl">
                            <h5 className="text-nu20 font-bold mb-3">
                              Easy Customer Service
                            </h5>
                            <p className="text-nu30 font-medium">
                              It uses a dictionary of over 200 Latin words,
                              combined with a model sentence structures.
                            </p>
                          </div>
                        </div>
                        <div className="col-span-6">
                          <div className="px-10 py-10 border-t-2 border-primary1 bg-nu70 rounded-xl">
                            <h5 className="text-nu20 font-bold mb-3">
                              Quality Cost Service
                            </h5>
                            <p className="text-nu30 font-medium">
                              It uses a dictionary of over 200 Latin words,
                              combined with a model sentence structures.
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-nu30 mb-[30px]">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.{" "}
                      </p>
                    </div>
                    <div className="">
                      <h2 className="text-nu20 font-bold mb-[30px]">
                        3 Simple Steps to Process
                      </h2>
                      <p className="text-nu30 font-medium mb-[30px]">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of text
                      </p>
                      <div className="grid grid-cols-12 gap-6 mb-10">
                        <div className="col-span-4">
                          <div className="border-t-2 border-nu50 rounded-xl px-6 py-6 text-center">
                            <div className="px-3 py-3 bg-[#FF38111A] inline-block rounded-full mb-3">
                              <h5 className="px-3 py-2 bg-primary1 rounded-full text-nu10 font-bold">
                                01
                              </h5>
                            </div>
                            <h5 className="text-[20px] text-nu20 font-bold mb-3">
                              Step One
                            </h5>
                            <p className="text-nu30 font-medium">
                              It uses a dictionary of over 200 .
                            </p>
                          </div>
                        </div>
                        <div className="col-span-4">
                          <div className="border-t-2 border-nu50 rounded-xl px-6 py-6 text-center">
                            <div className="px-3 py-3 bg-[#FF38111A] inline-block rounded-full mb-3">
                              <h5 className="px-3 py-2 bg-primary1 rounded-full text-nu10 font-bold">
                                02
                              </h5>
                            </div>
                            <h5 className="text-[20px] text-nu20 font-bold mb-3">
                              Step Two
                            </h5>
                            <p className="text-nu30 font-medium">
                              It uses a dictionary of over 200 .
                            </p>
                          </div>
                        </div>
                        <div className="col-span-4">
                          <div className="border-t-2 border-nu50 rounded-xl px-6 py-6 text-center">
                            <div className="px-3 py-3 bg-[#FF38111A] inline-block rounded-full mb-3">
                              <h5 className="px-3 py-2 bg-primary1 rounded-full text-nu10 font-bold">
                                03
                              </h5>
                            </div>
                            <h5 className="text-[20px] text-nu20 font-bold mb-3">
                              Step Three
                            </h5>
                            <p className="text-nu30 font-medium">
                              It uses a dictionary of over 200 .
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <VideoPopup />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="">
                  <div className="mb-[30px]">
                    <h3 className="text-primary1">Price: ${price}</h3>
                  </div>
                  <div className="">
                    <Link to={_id}>
                      <button className="px-4 py-2 bg-primary1 text-nu10 rounded-lg">
                        Proceed Checkout
                      </button>
                    </Link>
                  </div>
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
