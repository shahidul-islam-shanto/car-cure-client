import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const TableBooks = ({
  bookings,
  handleDeleteBookings,
  handleConfirmBooking,
}) => {
  const { _id, img, customerName, title, price, date, email, status } =
    bookings;

  return (
    <>
      <tr className="">
        <th>
          <button
            onClick={() => handleDeleteBookings(_id)}
            className="px-2 py-2 bg-nu20 inline-block rounded-full"
          >
            <IoCloseOutline className="text-nu10 text-[24px] font-bold" />
          </button>
        </th>
        <td>
          <div className="flex items-center gap-6">
            <div className="">
              {img && (
                <img
                  className="w-12 h-12 rounded-full"
                  src={img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>

            <div>
              <div className="font-bold">{customerName}</div>
              <div className="text-sm opacity-50">{title}</div>
            </div>
          </div>
        </td>
        <td>
          <p className="text-nu20">{email}</p>
        </td>
        <td>
          <p className="text-nu20">${price}</p>
        </td>
        <td>
          <p>{date}</p>
        </td>
        <td>
          {status === "Confirm" ? (
            <button className="px-4 py-2 bg-green-600 rounded-md text-nu10">
              Confrim
            </button>
          ) : (
            <button
              onClick={() => {
                // console.log(_id);
                handleConfirmBooking(_id);
              }}
              className="px-4 py-2 bg-primary1 rounded-md text-nu10"
            >
              Pending
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableBooks;
