import React from "react";
import MyContaner from "../component/Mycontaner";
import { MdElectricBolt } from "react-icons/md";
import studentPic1 from "../assets/student1.jpg";
import studentPick2 from "../assets/student2.jpg";
import studentPick3 from "../assets/student3.jpg";
import studentPick4 from "../assets/student4.jpg";
import FeaturedCourses from "../component/FeaturedCourses";
import Instructors from "../component/TopInstructors";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <div className="bg-[#e7e8ec] min-h-[650px]">
        <section>
          {" "}
          <MyContaner>
            <div className="sm:flex px-5 ">
              <div className="flex items-center justify-center  h-[650px]   ">
                <div>
                  <h1 className="bg-white w-[350px] p-1  rounded-3xl flex items-center gap-5  text-fast  ">
                    <div className="ml-2.5 rounded-2xl bg-[#d9f2f0] p-2 ">
                      <MdElectricBolt className=" text-[#00a598]" />
                    </div>
                    Welcome to Online Education
                  </h1>
                  <h1 className=" font-bold text-5xl text-fast mt-10  ">
                    Start learning from <br />
                    the world's
                    <span className=" text-[#00a598]">best institutions</span>
                  </h1>
                  <button className=" bg-[#00a598] px-5 text-white py-2 rounded-full text-fast mt-10">
                    Get started
                  </button>
                </div>
              </div>
              <div className=" flex items-center justify-center  ">
                <div className=" grid grid-cols-2 ml-10 gap-6 ">
                  <img src={studentPic1} className="w-60  rounded-sm" alt="" />
                  <img src={studentPick2} className="w-60" alt="" />
                  <div className="flex items-center justify-center">
                    <img
                      src={studentPick4}
                      className="w-60 rounded-sm "
                      alt=""
                    />{" "}
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={studentPick3}
                      className="w-60 rounded-sm "
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </MyContaner>
        </section>
      </div>
      <section>
        <FeaturedCourses></FeaturedCourses>
      </section>
      <section>
        <Instructors></Instructors>
      </section>
    </div>
  );
};

export default Home;
