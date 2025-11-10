import React, { useEffect, useState } from "react";
import MyContaner from "./Mycontaner";
import useAxious from "../Hook/useAxious";
import ExpertInstructors from "../assets/chous Us/Expert Instructors4.webp";
import carar from "../assets/chous Us/carer1.webp";
import Certificates from "../assets/chous Us/cartificate-2.avif";
import community from "../assets/chous Us/sapurt3.webp";

import { MdElectricBolt, MdOutlineAccessTime } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const FeaturedCourses = () => {
  const instance = useAxious();
  const [corses, setCorses] = useState([]);

  useEffect(() => {
    instance.get("/featuredCourses").then((res) => {
      setCorses(res.data);
    });
  });
  return (
    <div className="bg-[#e7e8ec]  mt-50">
      <MyContaner>
        <div>
          <h1 className=" font-bold text-5xl text-fast text-center pt-[100px]">
            Explore Our World's Best Courses
          </h1>
          <div className="grid grid-cols-3  gap-20  space-y-4 mt-10">
            {corses.map((cors) => (
              <div className="bg-white  shadow-2xl rounded-t-3xl ">
                <div className="h-60  overflow-hidden">
                  <img
                    src={cors.image_url}
                    className="w-full h-full   rounded-t-3xl object-cover"
                    alt=""
                  />
                </div>
                <div className="p-3">
                  <h1 className=" font-bold text-fast">{cors.title}</h1>
                  <p className="flex items-center gap-3 font-bold  ">
                    <div className="bg-[#d9f2f0] p-2 rounded-2xl">
                      {" "}
                      <MdOutlineAccessTime className="text-[#0c9387]" />
                    </div>{" "}
                    {cors.duration}
                  </p>
                  <ul>
                    <li className="text-second">
                      {cors.description.map((des) => (
                        <li className="">✅{des}</li>
                      ))}
                    </li>
                  </ul>
                  <div className="mt-7 flex items-center justify-between ">
                    <h1 className="font-bold">Price: {cors.price}</h1>
                    <button className=" bg-[#00a598] px-5 text-white py-2 rounded-full text-fast flex items-center gap-2  ">
                      View detais <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MyContaner>
      <div class="bg-gradient-to-r from-[#17272a] via-[#162d2e] to-[#181d22] mt-15 h-[600px] w-full">
        <div className="flex items-center justify-center p-10">
          <h1 className="bg-white w-[200px] p-1  rounded-3xl flex items-center gap-3  text-center text-fast  ">
            <div className="ml-2.5 rounded-2xl bg-[#d9f2f0] p-2 ">
              <MdElectricBolt className=" text-[#00a598]" />
            </div>
            Why Choose Us
          </h1>
        </div>
        <MyContaner>
          <div className="flex items-center  justify-between ">
            <div>
              <figure>
                <img
                  src={ExpertInstructors}
                  className="w-70  rounded-3xl h-48 "
                  alt=""
                />
              </figure>
              <h1 className="font-bold text-2xl text-fast text-white mt-5 ">
                Expert Instructors
              </h1>
              <p className="text-white text-second">
                Learn from industry professionals and university lecturers who
                bring real-world experience into every lesson.
              </p>
            </div>
            <div>
              <figure>
                <img src={carar} className="w-70 h-48  rounded-3xl " alt="" />
              </figure>
              <h1 className="font-bold text-2xl text-fast text-white mt-5 ">
                Career-Focused Courses
              </h1>
              <p className=" text-white text-second">
                Every course is designed to develop practical skills that help
                you grow in your career or academic journey.
              </p>
            </div>
            <div>
              <figure>
                <img
                  src={community}
                  className="w-70 h-48  rounded-3xl "
                  alt=""
                />
              </figure>
              <h1 className="font-bold text-2xl text-fast text-white mt-5 ">
                Active Support & <br /> Community
              </h1>
              <p className="text-white text-second">
                Join a friendly learner community and get instructor feedback
                and 24/7 support when you need it.
              </p>
            </div>
            <div>
              <figure>
                <img
                  src={Certificates}
                  className="w-70 h-48 rounded-3xl "
                  alt=""
                />
              </figure>
              <h1 className="font-bold text-2xl text-fast text-white mt-5 ">
                Recognized Certificates
              </h1>
              <p className="text-white text-second">
                Earn verified certificates that strengthen your resume and
                LinkedIn profile.
              </p>
            </div>
          </div>
        </MyContaner>
      </div>
    </div>
  );
};

export default FeaturedCourses;
