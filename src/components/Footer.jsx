import React from "react";
import { FaFacebookF, FaRegCopyright } from "react-icons/fa6";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#540b0e] text-[#fff3b0] pb-6 ">
      {/* Top Section */}
      <h2 className="text-3xl font-bold text-center text-[#540b0e] p-4 mb-5 bg-[#e09f3e]">
        <span className="text-[#fff3b0]">Tech</span>Verse
      </h2>

      {/* Middle Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left mb-10  md:px-12 px-6">
        {/* Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#e09f3e] mb-3">INFO</h3>
          <p className="text-sm leading-relaxed text-[#fff3b0]/90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            voluptates, eius rem officia dolore necessitatibus voluptate
            excepturi exercitationem, adipisci sunt facilis numquam facere cum
            repellendus sint quae praesentium earum commodi?
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold text-[#e09f3e] mb-3">
            CATEGORIES
          </h3>
          <ul className="space-y-2">
            <li>Laptop</li>
            <li>Smart Phones</li>
            <li>Headphones</li>
            <li>Others</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#e09f3e] mb-3">
            QUICK LINKS
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to={"/"}
                className="hover:text-[#e09f3e] transition-all duration-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/cart"}
                className="hover:text-[#e09f3e] transition-all duration-300 cursor-pointer"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to={"/order"}
                className="hover:text-[#e09f3e] transition-all duration-300 cursor-pointer"
              >
                Order
              </Link>
            </li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-[#e09f3e] mb-3">
            SERVICES
          </h3>
          <ul className="space-y-2">
            <li>Free & Fast Delivery</li>
            <li>Secure Online Payment</li>
            <li>7–Day Easy Return</li>
            <li>Cash on Delivery</li>
            <li>Order Tracking</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#e09f3e]/30 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 md:px-12 px-6">
        <p className="flex items-center gap-2 text-sm text-[#fff3b0]/80">
          <FaRegCopyright /> 2025 TechVerse | All Rights Reserved
        </p>

        <div className="flex gap-4 text-lg">
          <span className="p-2 bg-[#e09f3e] text-[#540b0e] rounded-full hover:bg-[#fff3b0] hover:text-[#540b0e] transition-all cursor-pointer">
            <FaFacebookF />
          </span>
          <span className="p-2 bg-[#e09f3e] text-[#540b0e] rounded-full hover:bg-[#fff3b0] hover:text-[#540b0e] transition-all cursor-pointer">
            <FaTwitter />
          </span>
          <span className="p-2 bg-[#e09f3e] text-[#540b0e] rounded-full hover:bg-[#fff3b0] hover:text-[#540b0e] transition-all cursor-pointer">
            <FaLinkedinIn />
          </span>
          <span className="p-2 bg-[#e09f3e] text-[#540b0e] rounded-full hover:bg-[#fff3b0] hover:text-[#540b0e] transition-all cursor-pointer">
            <FaYoutube />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
