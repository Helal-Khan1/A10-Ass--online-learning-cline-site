import React from "react";
import MyContaner from "./Mycontaner";
import { MdElectricBolt } from "react-icons/md";
import team1 from "../assets/Instructors/team-1.png";
import team2 from "../assets/Instructors/team-2.png";
import team3 from "../assets/Instructors/team-3.png";
import team4 from "../assets/Instructors/team-4.png";

const Instructors = () => {
  return (
    <div className="bg-[#e7e8ec] h-[700px] mt-[150px] ">
      <MyContaner>
        <div>
          <div className="flex items-center justify-center p-10">
            <h1 className="bg-white w-[200px] p-1  rounded-3xl flex items-center gap-3  text-center text-fast  ">
              <div className="ml-2.5 rounded-2xl bg-[#d9f2f0] p-2 ">
                <MdElectricBolt className=" text-[#00a598]" />
              </div>
              Top Instructors
            </h1>
          </div>
          <h1 className=" text-4xl font-bold text-fast text-center ">
            Our Best Instructors
          </h1>
          <div className="grid grid-cols-4 mt-10">
            <div className="h-[400px] w-[270px] rounded-2xl bg-white">
              <figure className="  rounded-t-2xl">
                <img
                  src={team1}
                  className=" w-full h-70 rounded-t-2xl"
                  alt=""
                />
              </figure>
              <h1 className="font-bold text-2xl p-1  ">Zaramane Mass Likan</h1>
              <h1 className="text-second text-[#00a598] p-2 text-2xl ">
                Online Teacher
              </h1>
            </div>
            <div className="h-[400px] w-[270px] rounded-2xl bg-white">
              <figure className="  rounded-t-2xl">
                <img
                  src={team2}
                  className=" w-full h-70 rounded-t-2xl"
                  alt=""
                />
              </figure>
              <h1 className="font-bold text-2xl p-1  ">Amelia Grace Lily</h1>
              <h1 className="text-second text-[#00a598] p-2 text-2xl ">
                Online Teacher
              </h1>
            </div>
            <div className="h-[400px] w-[270px] rounded-2xl bg-white">
              <figure className="  rounded-t-2xl">
                <img
                  src={team3}
                  className=" w-full h-70 rounded-t-2xl"
                  alt=""
                />
              </figure>
              <h1 className="font-bold text-2xl p-1  ">masum Logon Dree</h1>
              <h1 className="text-second text-[#00a598] p-2 text-2xl ">
                Online Teacher
              </h1>
            </div>
            <div className="h-[400px] w-[270px] rounded-2xl bg-white">
              <figure className="  rounded-t-2xl">
                <img
                  src={team4}
                  className=" w-full h-70 rounded-t-2xl"
                  alt=""
                />
              </figure>
              <h1 className="font-bold text-2xl p-1  ">Isella Charlotty</h1>
              <h1 className="text-second text-[#00a598] p-2 text-2xl ">
                Online Teacher
              </h1>
            </div>
          </div>
        </div>
      </MyContaner>
    </div>
  );
};

export default Instructors;
