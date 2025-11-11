import React, { useEffect, useState } from "react";
import MyContaner from "../../component/Mycontaner";
import useAxious from "../../Hook/useAxious";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router";

const Courses = () => {
  const instance = useAxious();
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    instance.get("/all_courses").then((res) => {
      console.log(res.data);
      setAllCourses(res.data);
    });
  }, [instance]);

  return (
    <div className="min-h-screen bg-[#e7e8ec]">
      <h1 className=" font-bold text-6xl  text-center pt-15  ">
        Explore world best courses
      </h1>
      <MyContaner className=" w-10/12">
        <div className="grid grid-cols-3 gap-5 mt-20">
          {allCourses.map((cors) => (
            <div className="bg-white w-[350px] shadow-2xl rounded-t-3xl ">
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

                <p>
                  <span className="font-bold">description:</span>{" "}
                  {cors.short_description}
                </p>
                <h1 className="font-bold text-2xl">Our Benefits</h1>
                <ul>
                  <li className="text-second">
                    {cors.benefits.map((des) => (
                      <li className="">✅{des}</li>
                    ))}
                  </li>
                </ul>
                <div className="mt-7 flex items-center justify-between ">
                  <h1 className="font-bold">Price: {cors.price}</h1>
                  <Link to={`/corsDeatails/${cors._id}`}>
                    <button className=" bg-[#00a598] px-5 text-white py-2 rounded-full text-fast flex items-center gap-2  ">
                      View detais <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MyContaner>
    </div>
  );
};

export default Courses;
