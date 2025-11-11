import React from "react";
import MyContaner from "./MyContaner";
import { PiPhone } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#17272a] via-[#162d2e] to-[#181d22] mt-16 w-full text-white ‍ px-15">
      <MyContaner>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-16">
          {/* Contact Section */}
          <div className="space-y-5">
            <h1 className="underline text-2xl font-semibold">GET IN TOUCH!</h1>
            <p className="flex items-center gap-2 text-lg text-gray-300">
              <PiPhone className="text-[#00a598]" /> (+8880) 7551932578
            </p>
            <p className="text-gray-400">Email: companyinfo@gmail.com</p>
            <div className="flex items-center gap-5 text-2xl">
              <FaFacebook className="hover:text-blue-500 transition" />
              <ImInstagram className="hover:text-pink-500 transition" />
              <FaXTwitter className="hover:text-sky-400 transition" />
              <BsYoutube className="hover:text-red-500 transition" />
            </div>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h1 className="underline text-2xl font-semibold">COMPANY INFO</h1>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2 hover:text-white transition">
                <FaArrowRightLong /> About Us
              </p>
              <p className="flex items-center gap-2 hover:text-white transition">
                <FaArrowRightLong /> Resource Center
              </p>
              <p className="flex items-center gap-2 hover:text-white transition">
                <FaArrowRightLong /> Instructor
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h1 className="underline text-2xl font-semibold">USEFUL LINKS</h1>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2 hover:text-white transition">
                <FaArrowRightLong /> Home
              </p>
              <p className="flex items-center gap-2 hover:text-white transition">
                <FaArrowRightLong /> All Courses
              </p>
              <p className="flex items-center gap-2 hover:text-white transition">
                <FaArrowRightLong /> News & Blogs
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Online Learning Platform — All Rights
          Reserved.
        </div>
      </MyContaner>
    </div>
  );
};

export default Footer;
