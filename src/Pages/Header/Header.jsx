import React from "react";
import logo from "../../assets/images/logo/logo.png";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
  const navBer = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/service"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blog"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </li>
      {/* {user?.email ? (
        <>
          <li>
            <NavLink
              to={"/bookings"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Bookings
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogOut}>LogOut</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        </li>
      )} */}
    </>
  );
  return (
    <>
      <div className="py-4 overflow-hidden">
        <div className="container-2">
          <div className="flex justify-between items-center gap-6">
            <div className="">
              <img src={logo} alt="" />
            </div>
            <div className="lg:block hidden">
              <ul className="flex items-center gap-6">{navBer}</ul>
            </div>
            <div className="flex items-center gap-6">
              <span className="cursor-pointer">
                <HiOutlineShoppingBag className="text-[24px]" />
              </span>
              <span className="cursor-pointer">
                <IoSearch className="text-[24px]" />
              </span>
              <div className="">
                <button className="cursor-pointer border-2 rounded-lg px-6 py-2 font-semibold text-primary">
                  Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
