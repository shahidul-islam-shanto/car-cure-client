import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import TableBooks from "../../Components/TableBooks/TableBooks";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
import axios from "axios";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setBookings(data);
    //   });
  }, [url]);

  const handleDeleteBookings = (id) => {
    const proceed = confirm("Are you sure this delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("item delete");
            const remaining = bookings.filter((items) => items._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirmBooking = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
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
