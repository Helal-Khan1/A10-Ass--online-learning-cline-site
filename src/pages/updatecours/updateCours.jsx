import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiousSecure from "../../Hook/useAxiousSecure";
import { toast } from "react-toastify";

const UpdateCours = () => {
  const { id } = useParams(); // URL থেকে id নেবে
  const instance = useAxiousSecure();
  const [course, setCourse] = useState({});

  // Load existing course
  useEffect(() => {
    instance.get(`/all_courses/${id}`).then((res) => {
      setCourse(res.data);
    });
  }, [id, instance]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedCourse = {
      title: form.title.value,
      image_url: form.photo.value,
      price: form.price.value,
      duration: form.duration.value,
      category: form.category.value,
      more_description: form.description.value,
    };

    toast.success("Course updated successfully!");

    instance.patch(`/all_courses/${id}`, updatedCourse).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <form onSubmit={handleUpdate} className="w-[400px] space-y-2">
        <input
          type="text"
          name="title"
          defaultValue={course.title}
          className="input w-full"
          placeholder="Enter course title"
        />
        <input
          type="url"
          name="photo"
          defaultValue={course.image_url}
          className="input w-full"
          placeholder="Image URL"
        />
        <input
          type="text"
          name="price"
          defaultValue={course.price}
          className="input w-full"
          placeholder="Price"
        />
        <input
          type="text"
          name="duration"
          defaultValue={course.duration}
          className="input w-full"
          placeholder="Duration"
        />
        <input
          type="text"
          name="category"
          defaultValue={course.category}
          className="input w-full"
          placeholder="Category"
        />
        <input
          type="text"
          name="description"
          defaultValue={course.more_description}
          className="input w-full"
          placeholder="Description"
        />

        <button
          type="submit"
          className="btn w-full mt-3 bg-[#00a598] text-white"
        >
          Update Course
        </button>
      </form>
    </div>
  );
};

export default UpdateCours;
