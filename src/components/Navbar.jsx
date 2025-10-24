import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

import { MdMenuOpen } from "react-icons/md";
import Mycontext from "../context/Mycontext";

const Navbar = () => {
  // Context
  const { cartList } = useContext(Mycontext);

  const navigate = useNavigate();
  // Open Menu On Mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // Get User Auth
  const auth = JSON.parse(localStorage.getItem("auth"));

  // Logout
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="font-sans sticky top-0 z-50">
      {/* Header Top */}
      <div className="bg-[#e09f3e] text-[#540b0e] text-sm py-2 text-center font-medium">
        Discover the latest laptops, mobiles, and gadgets — all in one place!
      </div>

      {/* Header Bottom */}
      <div className=" bg-[#540b0e] text-[#fff3b0] flex items-center justify-between px-6 md:px-12 py-4 shadow-md">
        {/* Brand */}
        <div className="text-3xl font-bold tracking-wide">
          Tech<span className="text-[#e09f3e]">Verse</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link
            to="/"
            className="hover:text-[#e09f3e] transition-colors duration-200"
          >
            Home
          </Link>

          {auth && (
            <Link
              to="/order"
              className="hover:text-[#e09f3e] transition-colors duration-200"
            >
              Orders
            </Link>
          )}
          {auth?.user?.email === "faizandeveloper@gmail.com" && (
            <Link
              to="/dashboard"
              className="hover:text-[#e09f3e] transition-colors duration-200"
            >
              Admin
            </Link>
          )}
          {auth ? (
            <Link
              to="/login"
              className="hover:text-[#e09f3e] transition-colors duration-200"
              onClick={logout}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="hover:text-[#e09f3e] transition-colors duration-200"
            >
              Login
            </Link>
          )}
          <Link
            to="/cart"
            className="relative hover:text-[#e09f3e] transition-colors duration-200"
          >
            <RiShoppingCart2Line size={22} />
            <span className="absolute -top-2 -right-3 bg-[#e09f3e] text-[#540b0e] text-xs font-semibold rounded-full px-1.5">
              {cartList.length > 0 && cartList.length}
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#fff3b0]  focus:outline-none cursor-pointer "
        >
          {menuOpen ? <RxCross2 size={27}  /> : <MdMenuOpen size={27} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#540b0e] text-[#fff3b0] flex flex-col items-center gap-4 py-4 md:hidden z-10 shadow-lg">
            <Link
              to="/"
              className="hover:text-[#e09f3e] transition-colors duration-200 w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
           
            {auth && (
              <Link
                to="/order"
                className="hover:text-[#e09f3e] transition-colors duration-200 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Order
              </Link>
            )}
            {auth?.user?.email && (
              <Link
                to="/dashboard"
                className="hover:text-[#e09f3e] transition-colors duration-200 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Admin
              </Link>
            )}
            {auth ? (
              <Link
                to="/login"
                className="hover:text-[#e09f3e] transition-colors duration-200 w-full text-center"
                onClick={logout}
              >
                Logout
              </Link>
            ) : (
              <Link
                to="/login"
                className="hover:text-[#e09f3e] transition-colors duration-200 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            )}
            <Link
              to="/cart"
              className="relative hover:text-[#e09f3e] transition-colors duration-200 "
              onClick={() => setMenuOpen(false)}
            >
              <RiShoppingCart2Line size={27} />
              <span className="absolute -top-1 -right-2 bg-[#e09f3e] text-[#540b0e] text-xs font-semibold rounded-full px-1.5">
                {cartList.length > 0 && cartList.length}
              </span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
