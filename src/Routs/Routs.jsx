import { createBrowserRouter } from "react-router";
import HomeLayout from "../MainLayout/HomeLayout";
import Home from "../pages/Home";
import Courses from "../pages/Courses/Courses";
import Login from "../pages/Login/Login";
import DashboardLayout from "../MainLayout/DashboardLayout";
import MyEnrolledCourses from "../pages/MyEnrolledCourses/MyEnrolledCourses";
import AddCourse from "../pages/AddCourse/AddCourse";
import MyAddedCourses from "../pages/MyAddedCourses/MyAddedCourses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "corses",
        element: <Courses></Courses>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashbord",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "enrol",
        element: <MyEnrolledCourses></MyEnrolledCourses>,
      },
      {
        path: "addcoruss",
        element: <AddCourse />,
      },
      {
        path: "myaddcoruss",
        element: <MyAddedCourses></MyAddedCourses>,
      },
    ],
  },
]);
