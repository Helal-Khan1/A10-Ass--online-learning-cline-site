import React from "react";
import MyContaner from "./Mycontaner";
import { PiPhone } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div class="bg-gradient-to-r from-[#17272a] via-[#162d2e] to-[#181d22] mt-15 h-[500px] w-full">
      <MyContaner>
        <div className="flex items-center justify-between text-white pt-30 ">
          <div className=" space-y-5">
            <h1 className=" underline text-fast text-2xl">GET IN TOUCH!</h1>
            <p className="flex items-center text-2xl text-second ">
              <PiPhone></PiPhone> Phone (+8880)7551932578
            </p>
            <p>Email: companyinfo@gmial.com</p>
            <div className="flex items-center gap-5">
              <FaFacebook></FaFacebook>
              <ImInstagram></ImInstagram>
              <FaXTwitter />
              <BsYoutube></BsYoutube>
            </div>
          </div>
          <div className=" space-y-5">
            <h1 className=" underline text-fast text-2xl">COMPANY INFO</h1>
            <p className="flex items-center gap-2.5 text-center ">
              <FaArrowRightLong /> About Us
            </p>
            <p className="flex items-center gap-2.5 text-center ">
              <FaArrowRightLong /> Resource Center
            </p>
            <p className="flex items-center gap-2.5 text-center ">
              <FaArrowRightLong /> Instructor
            </p>
          </div>
          <div className=" space-y-5">
            <h1 className=" underline text-fast text-2xl">USEFUL LINKS</h1>
            <p className="flex items-center gap-2.5 text-center ">
              <FaArrowRightLong /> Home
            </p>
            <p className="flex items-center gap-2.5 text-center ">
              <FaArrowRightLong /> All Courses
            </p>
            <p className="flex items-center gap-2.5 text-center ">
              <FaArrowRightLong /> News & Blogs
            </p>
          </div>
        </div>
      </MyContaner>
    </div>
  );
};

export default Footer;
