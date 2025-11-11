import React from "react";
import MyContaner from "./MyContaner";
import { MdElectricBolt } from "react-icons/md";
import team1 from "../assets/Instructors/team-1.png";
import team2 from "../assets/Instructors/team-2.png";
import team3 from "../assets/Instructors/team-3.png";
import team4 from "../assets/Instructors/team-4.png";
import { motion } from "framer-motion";

const instructors = [
  { name: "Zaramane Mass Likan", role: "Online Teacher", image: team1 },
  { name: "Amelia Grace Lily", role: "Online Teacher", image: team2 },
  { name: "Masum Logon Dree", role: "Online Teacher", image: team3 },
  { name: "Isella Charlotty", role: "Online Teacher", image: team4 },
];

const Instructors = () => {
  return (
    <div className="bg-gray-100 py-20">
      <MyContaner>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="inline-flex items-center bg-white px-5 py-2 rounded-3xl text-gray-800 font-bold text-xl md:text-2xl gap-3 mx-auto mb-6">
            <span className="bg-[#d9f2f0] p-2 rounded-full">
              <MdElectricBolt className="text-[#00a598]" />
            </span>
            Top Instructors
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Best Instructors
          </h2>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {instructors.map((inst, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-xs hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-2xl text-gray-800 mb-2">
                  {inst.name}
                </h3>
                <p className="text-[#00a598] font-medium">{inst.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </MyContaner>
    </div>
  );
};

export default Instructors;
