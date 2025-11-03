import React from "react";
import person from "../../assets/images/about_us/person.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="py-20">
        <div className="container-2">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6">
              <div className="">
                <img src={person} alt="" />
              </div>
            </div>
            <div className="col-span-6">
              <div className="">
                <h5 className="text-primary1 mb-4">About Us</h5>
                <h1 className="mb-4">
                  We are qualified & of experience in this field
                </h1>
                <p className="mb-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <p className="mb-4">
                  the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable.
                </p>
                <div className="">
                  <button className="px-6 py-2 rounded-lg bg-primary1 text-nu10">
                    Get More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
