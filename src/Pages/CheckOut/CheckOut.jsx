import React, { useContext } from "react";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "./CheckOut.css";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { title, price, img, service_id } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleConfirmOrder = (e) => {
    e.preventDefault();

    const from = e.target;
    const name = from.name.value;
    const date = from.date.value;
    const number = from.number.value;
    const email = from.email.value;
    // const url = from.url.value;
    const message = from.message.value;
    const title = from.title.value;

    const order = {
      customerName: name,
      date: date,
      number: number,
      email: email,
      service_id: service_id,
      img: img,
      message: message,
      title: title,
      price: price,
    };
    console.log(order);

    fetch("https://car-doctor-server-mauve.vercel.app/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully!",
            text: "added this new Location?!",
            icon: "success",
          });
        }
      });
  };
  return (
    <>
      <div className="">
        <BredCrumb bradCrumb={"Check Out"} />
      </div>
      <div className="xl:py-[130px] lg:py-[110px] md:py-[90px] sm:py-[70px] py-[60px]">
        <div className="container-2">
          <form
            onSubmit={handleConfirmOrder}
            className="px-16 py-16 bg-nu60 rounded-2xl"
          >
            <div className="grid grid-cols-12 gap-6 mb-6">
              <div className="col-span-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  defaultValue={user?.displayName}
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="date"
                  name="date"
                  placeholder="Your Phone"
                  className=" w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="number"
                  name="number"
                  placeholder="Your Phone"
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="text"
                  name="title"
                  placeholder="Your Title"
                  defaultValue={title}
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  defaultValue={user?.email}
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              {/* <div className="col-span-6">
                <input
                  type="text"
                  name="url"
                  placeholder="Your photo url"
                  defaultValue={img}
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div> */}
              <div className="col-span-6">
                <input
                  type="number"
                  name="price"
                  placeholder="Your price"
                  defaultValue={price}
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
            <div className="">
              <textarea
                name="message"
                rows="10"
                placeholder="Your Message"
                className="w-full px-4 py-4 mb-4 border bg-nu10 border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>
            </div>
            <div className="">
              <input
                type="submit"
                className="px-6 py-3 bg-primary1 rounded-xl w-full text-center text-nu10 font-semibold cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
