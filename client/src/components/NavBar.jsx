import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { BsCollection } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { PiContactlessPaymentThin } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ShopContext } from "../context/ShopContext";
const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    navigate,
    getCartCount,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img className="w-36" src={assets.logo} alt="" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search"
        />

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            alt="Login"
            className="w-5 cursor-pointer"
          />
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 p-4">
              <div className="felx flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logOut} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 cursor-pointer" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 sm:hidden"
        />

        {/* sidebar menu only visible for mobile screen*/}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 mt-3 text-gray-600 ">
            <div
              onClick={() => setVisible(false)}
              className="cursor-pointer mr-auto pl-5"
            >
              <IoIosCloseCircleOutline className="text-2xl" />
            </div>

            <NavLink
              onClick={() => setVisible(false)}
              to="/"
              className="flex items-center hover:border-b-2 hover:border-black transition-all duration-300 gap-1"
            >
              <IoHomeOutline />
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/collection"
              className="flex items-center hover:border-b-2 hover:border-black transition-all duration-150 gap-1"
            >
              <BsCollection />
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/about"
              className="flex items-center hover:border-b-2 hover:border-black transition-all duration-150 gap-1"
            >
              <IoPersonOutline />
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/contact"
              className="flex items-center gap-1 hover:border-b-2 hover:border-black transition-all duration-150"
            >
              <PiContactlessPaymentThin />
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
