import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import TableBooks from "../../Components/TableBooks/TableBooks";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  // const url = `https://car-doctor-server-mauve.vercel.app/bookings?email=${user?.email}`;
  const url = `/bookings?email=${user?.email}`;

  useEffect(() => {
    //** system 1 start */
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setBookings(data);
    //   });
    //** system 1 end */

    //** system 2 start */
    // axios.get(url, { withCredentials: true }).then((res) => {
    //   setBookings(res.data);
    // });
    //** system 2 end */
    // axios
    //** system 3 start */
    axiosSecure.get(url).then((res) => {
      setBookings(res.data);
    });
    //** system 3 end */
  }, [url, axiosSecure]);

  const handleDeleteBookings = (id) => {
    // const proceed = confirm("Are you sure this delete");
    // if (proceed) {
    //   fetch(`https://car-doctor-server-mauve.vercel.app/bookings/${id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if (data.deletedCount > 0) {
    //         alert("item delete");
    //         const remaining = bookings.filter((items) => items._id !== id);
    //         setBookings(remaining);
    //       }
    //     });
    // }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-doctor-server-mauve.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = bookings.filter((items) => items._id !== id);
              setBookings(remaining);
            }
          });
      }
    });
  };

  const handleConfirmBooking = (id) => {
    fetch(`https://car-doctor-server-mauve.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // states
          const remaining = bookings.filter((items) => items._id !== id);
          const update = bookings.find((items) => items._id === id);
          update.status = "Confirm";
          const newBooking = [update, ...remaining];
          setBookings(newBooking);
        }
      });
  };

  return (
    <>
      <BredCrumb bradCrumb={"Card Details"} />
      <div className="py-40">
        <div className="container-2">
          <table className="table ">
            <tbody className="">
              {bookings.map((items) => (
                <TableBooks
                  key={items._id}
                  bookings={items}
                  handleDeleteBookings={handleDeleteBookings}
                  handleConfirmBooking={handleConfirmBooking}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyBookings;
