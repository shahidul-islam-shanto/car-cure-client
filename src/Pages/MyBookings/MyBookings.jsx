import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import TableBooks from "../../Components/TableBooks/TableBooks";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  return (
    <div>
      <h1>this is my bookings: {bookings.length}</h1>
      <div className="py-20">
        <div className="container-2">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              {/* <thead>
                <tr className="text-nu20">
                  
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Date</th>
                </tr>
              </thead> */}
              <tbody>
                {bookings.map((items) => (
                  <TableBooks key={items._id} bookings={items} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
