import React, { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaCaretDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

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
          to={"/services"}
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
      <li>
        <NavLink
          to={"/login"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Login
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
      <div className="">
        <div className="container-2 z-50">
          <div className="lg:block hidden py-4">
            <div className="flex justify-between items-center gap-6">
              <div className="">
                <img className="w-[60px] h-[60px]" src={logo} alt="" />
              </div>
              <div className="">
                <div className="">
                  <ul className="flex items-center gap-6">{navBer}</ul>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="cursor-pointer">
                  <HiOutlineShoppingBag className="text-[24px]" />
                </span>
                <span className="cursor-pointer">
                  <IoSearch className="text-[24px]" />
                </span>
                <div className="">
                  <button className="cursor-pointer border-2 rounded-lg px-6 py-2 font-semibold text-primary1">
                    Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden block ">
            <nav className="w-full bg-nu10 fixed top-0 left-0 z-50">
              <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between ">
                {/* Logo */}
                <div className="flex items-center">
                  <img src={logo} alt="Logo" className="w-14 h-14" />
                </div>

                {/* Mobile Menu Button */}
                <div
                  className="lg:hidden flex justify-between cursor-pointer"
                  onClick={handleMenuToggle}
                >
                  <div className="">
                    {isOpen ? (
                      <IoClose className="text-[32px]" />
                    ) : (
                      <IoMenu className="text-[32px]" />
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile Dropdown Menu */}
              {/* {`lg:hidden bg-nu10 transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
                }`} */}
              <div
                className={`lg:hidden bg-nu10 transition-all duration-500 overflow-hidden ${
                  isOpen ? "h-full py-32" : "max-h-0 py-0"
                }`}
              >
                <ul className="flex flex-col h-[100vh] items-center">
                  <li className="mb-4">
                    <Link to={"/"} className="hover:text-indigo-400 transition text-[24px]">
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <NavLink
                      to={"/about"}
                      className="hover:text-indigo-400 transition text-[24px]"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="mb-4">
                    <NavLink
                      to={"/services"}
                      className="hover:text-indigo-400 transition text-[24px]"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="mb-4">
                    <NavLink
                      to={"/blog"}
                      className="hover:text-indigo-400 transition text-[24px]"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="mb-10">
                    <NavLink
                      to={"/contact"}
                      className="hover:text-indigo-400 transition text-[24px]"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="mb-4">
                    <button className="w-32 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
                      Login
                    </button>
                  </li>
                  <li>
                    <button className="w-32 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition">
                      Join
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
