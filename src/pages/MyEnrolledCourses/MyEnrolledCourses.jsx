import React, { useEffect, useState } from "react";
import useAxiousSecure from "../../Hook/useAxiousSecure";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import useAuth from "../../Hook/useAuth";

const MyEnrolledCourses = () => {
  const intance = useAxiousSecure();
  const { user } = useAuth();
  const [enroll, setEnroll] = useState([]);

  useEffect(() => {
    intance.get(`/myEnroll_courses?email=${user.email}`).then((res) => {
      setEnroll(res.data);
      console.log(res.data);
    });
  }, [intance, user]);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center">
        {enroll.map((course, index) => (
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

                <h2 className="font-semibold text-lg text-gray-700 mb-2">
                  What You’ll Learn 🎯
                </h2>
                <ul className="space-y-1 text-sm text-gray-600">
                  {course.benefits?.slice(0, 3).map((b, i) => (
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
    </div>
  );
};

export default MyEnrolledCourses;
