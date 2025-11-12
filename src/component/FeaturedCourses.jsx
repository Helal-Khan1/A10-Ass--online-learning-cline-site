import React, { useEffect, useState } from "react";
import MyContaner from "./MyContaner";
import useAxious from "../Hook/useAxious";
import { MdElectricBolt, MdOutlineAccessTime } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

import ExpertInstructors from "../assets/chous Us/Expert Instructors4.webp";
import carar from "../assets/chous Us/carer1.webp";
import Certificates from "../assets/chous Us/cartificate-2.avif";
import community from "../assets/chous Us/sapurt3.webp";

const FeaturedCourses = () => {
  const instance = useAxious();
  const [corses, setCorses] = useState([]);

  useEffect(() => {
    instance.get("/featuredCourses").then((res) => {
      setCorses(res.data);
    });
  }, [instance]);

  return (
    <div className="bg-gray-100">
  
      <MyContaner>
        <h1 className="font-bold text-4xl md:text-5xl text-center text-gray-800 pt-20 mb-12">
          Explore Our World's Best Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {corses.map((course, index) => (
            <motion.div
              key={course._id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-full max-w-sm flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={course.image_url}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-t-3xl transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <p className="absolute bottom-3 left-3 bg-white/90 text-gray-700 font-semibold px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <MdOutlineAccessTime className="text-[#00a598]" />{" "}
                  {course.duration}
                </p>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h1 className="font-bold text-xl text-gray-800 mb-2">
                    {course.title}
                  </h1>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {course.short_description.length > 100
                      ? course.short_description.slice(0, 100) + "..."
                      : course.short_description}
                  </p>

                  <h2 className="font-semibold text-lg text-gray-700 mb-2">
                    What You’ll Learn 🎯
                  </h2>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {course.benefits.slice(0, 3).map((b, i) => (
                      <li key={i}>✅ {b}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t">
                  <h1 className="font-bold text-lg text-gray-800">
                    💰 {course.price}
                  </h1>
                  <Link to={`/corsDeatails/${course._id}`}>
                    <button className="bg-[#00a598] text-white px-5 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-[#038c7e] transition-all">
                      View Details <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </MyContaner>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-[#17272a] via-[#162d2e] to-[#181d22] mt-20 py-20">
        <MyContaner>
          <div className="text-center mb-12">
            <h1 className="inline-flex items-center bg-white px-5 py-2 rounded-3xl text-gray-800 font-bold text-xl md:text-2xl gap-3 mx-auto">
              <span className="bg-[#d9f2f0] p-2 rounded-full">
                <MdElectricBolt className="text-[#00a598]" />
              </span>
              Why Choose Us
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Expert Instructors */}
            <div className="space-y-4">
              <img
                src={ExpertInstructors}
                className="w-72 h-48 mx-auto rounded-3xl object-cover"
                alt=""
              />
              <h2 className="font-bold text-2xl text-white">
                Expert Instructors
              </h2>
              <p className="text-gray-300 text-sm">
                Learn from industry professionals and university lecturers.
              </p>
            </div>

            {/* Career-Focused Courses */}
            <div className="space-y-4">
              <img
                src={carar}
                className="w-72 h-48 mx-auto rounded-3xl object-cover"
                alt=""
              />
              <h2 className="font-bold text-2xl text-white">
                Career-Focused Courses
              </h2>
              <p className="text-gray-300 text-sm">
                Develop practical skills that help you grow in your career.
              </p>
            </div>

            {/* Active Support & Community */}
            <div className="space-y-4">
              <img
                src={community}
                className="w-72 h-48 mx-auto rounded-3xl object-cover"
                alt=""
              />
              <h2 className="font-bold text-2xl text-white">
                Active Support & Community
              </h2>
              <p className="text-gray-300 text-sm">
                Join a learner community and get 24/7 instructor feedback.
              </p>
            </div>

            {/* Recognized Certificates */}
            <div className="space-y-4">
              <img
                src={Certificates}
                className="w-72 h-48 mx-auto rounded-3xl object-cover"
                alt=""
              />
              <h2 className="font-bold text-2xl text-white">
                Recognized Certificates
              </h2>
              <p className="text-gray-300 text-sm">
                Earn verified certificates to boost your resume and LinkedIn
                profile.
              </p>
            </div>
          </div>
        </MyContaner>
      </div>
    </div>
  );
};

export default FeaturedCourses;
