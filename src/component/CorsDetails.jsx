import React from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import useAxious from "../Hook/useAxious";
import useAxiousSecure from "../Hook/useAxiousSecure";
import useAuth from "../Hook/useAuth";
import { toast } from "react-toastify";

const CourseDetails = () => {
  const data = useLoaderData();
  const instance = useAxiousSecure();
  const { user } = useAuth();

  // const { _id } = data;
  // console.log(_id);

  const enrolhandalar = (e) => {
    console.log(e);

    const newCors = {
      title: e.title,
      category: e.category,
      price: e.price,
      duration: e.duration,
      more_description: e.more_description,
      benefits: e.benefits,
      email: user.email,
    };
    console.log(newCors);
    console.log(e._id);
    instance.post("/myEnroll_courses", newCors).then((res) => {
      const EnrollCorus = res.data;
      if (EnrollCorus.insertedId) {
        console.log(EnrollCorus);
        toast("Your Cors Enroll sucssussfully");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-4 flex justify-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <motion.img
          src={data.image_url}
          alt={data.title}
          className="w-full h-80 object-cover"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <div className="p-8">
          <motion.h1
            className="text-3xl font-bold text-gray-800 mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {data.title}
          </motion.h1>
          <p className="text-blue-600 font-medium mb-4">{data.category}</p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {data.short_description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="p-3 bg-gray-100 rounded-lg text-center">
              <p className="text-gray-500 text-sm">Duration</p>
              <p className="font-semibold text-gray-800">{data.duration}</p>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg text-center">
              <p className="text-gray-500 text-sm">Price</p>
              <p className="font-semibold text-green-600">{data.price}</p>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg text-center col-span-2 sm:col-span-2">
              <p className="text-gray-500 text-sm">Category</p>
              <p className="font-semibold text-gray-800">{data.category}</p>
            </div>
          </div>

          <motion.div
            className="bg-gray-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Course Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {data.more_description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              What You'll Learn 🎯
            </h3>
            <ul className="space-y-2">
              {data.benefits?.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all"
                >
                  <span className="text-green-500 text-lg">✅</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="mt-8 text-center">
            <motion.button
              onClick={() => enrolhandalar(data)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-colors"
            >
              Enroll Now 🚀
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
