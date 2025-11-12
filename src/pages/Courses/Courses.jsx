import React, { useEffect, useState } from "react";
import MyContaner from "../../component/MyContaner";
import useAxious from "../../Hook/useAxious";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Courses = () => {
  const instance = useAxious();
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    instance.get("/all_courses").then((res) => {
      setAllCourses(res.data);
    });
  }, [instance]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10">
      <h1 className="font-bold text-4xl md:text-6xl text-center text-gray-800 mb-12">
        Explore the World’s Best Courses 🌎
      </h1>

      <MyContaner className="w-11/12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {allCourses.map((course, index) => (
            <motion.div
              key={course._id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-[350px] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={course.image_url}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-t-3xl transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <p className="absolute bottom-3 left-3 bg-white/90 text-gray-700 font-semibold px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <MdOutlineAccessTime className="text-[#0c9387]" />{" "}
                  {course.duration}
                </p>
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h1 className="font-bold text-xl text-gray-800 mb-2">
                    {course.title}
                  </h1>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {course.short_description?.length > 100
                      ? course.short_description.slice(0, 100) + "..."
                      : course.short_description}
                  </p>

                  <h2 className="font-semibold text-lg text-gray-700 mb-2">
                    What You’ll Learn 🎯
                  </h2>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {course.benefits?.slice(0, 3)?.map((b, i) => (
                      <li key={i}>✅ {b}</li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
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
    </div>
  );
};

export default Courses;
