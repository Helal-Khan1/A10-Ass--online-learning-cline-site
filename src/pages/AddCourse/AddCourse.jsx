import React, { useEffect } from "react";
import MyContaner from "../../component/Mycontaner";
import useAxiousSecure from "../../Hook/useAxiousSecure";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";

const AddCourse = () => {
  // title, image URL, price, duration, category, and description , isFeatured.
  const intance = useAxiousSecure();
  const { user } = useAuth();

  const addcorusshandalar = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const photo = event.target.photo.value;
    const price = event.target.price.value;
    const duration = event.target.duration.value;
    const category = event.target.category.value;
    const description = event.target.description.value;
    const isFeatured = event.target.isFeatured.value;
    console.log({
      title,
      photo,
      price,
      duration,
      category,
      description,
      isFeatured,
    });

    const newCors = {
      title: title,
      category: category,
      price: price,
      duration: duration,
      more_description: description,
      image_url: photo,
    //   benefits: isFeatured,
      email: user.email,
    };

    intance.post("/all_courses", newCors).then((res) => {
      toast()
      console.log(res.data);
    });
  };

  return (
    <div>
      <MyContaner>
        <div>
          <h1
            className="font-bold text-center text-4xl mt-5 text-fast
          "
          >
            Add Our Cours
          </h1>
          <div className="flex items-center justify-center mt-5">
            <div className="w-[400px] border border-gray-400 rounded-sm shadow-2xl p-3">
              <form onSubmit={addcorusshandalar} className=" space-y-1.5">
                <label className="   text-second ">Title</label>
                <input
                  type="text"
                  className="input w-full"
                  name="title"
                  placeholder=" Enter Your Cours Title "
                />
                <label className="  text-second ">Image_Url</label>
                <input
                  type="url"
                  className="input w-full"
                  name="photo"
                  placeholder=" Enter Your Cours Image URL... "
                />
                <label className="   text-second ">Price</label>
                <input
                  type="text"
                  name="price"
                  className="input w-full"
                  placeholder=" Enter Your Cours Price "
                />
                <label className="   text-second ">Duration</label>
                <input
                  type="text"
                  name="duration"
                  className="input w-full"
                  placeholder=" Enter Your Cours Price "
                />
                <label className="   text-second ">Category</label>
                <input
                  type="text"
                  name="category"
                  className="input w-full"
                  placeholder=" Enter Your Cours Price "
                />
                <label className="   text-second ">description</label>
                <input
                  type="text"
                  name="description"
                  className="input w-full"
                  placeholder=" Enter Your Cours Price "
                />
                <label className="   text-second ">isFeatured</label>
                <input
                  type="text"
                  name="isFeatured"
                  className="input w-full"
                  placeholder=" Enter Your Cours Price "
                />
                <button
                  type="submit"
                  className="btn w-full mt-5 bg-[#00a598] text-white "
                >
                  Add Cours
                </button>
              </form>
            </div>
          </div>
        </div>
      </MyContaner>
    </div>
  );
};

export default AddCourse;
