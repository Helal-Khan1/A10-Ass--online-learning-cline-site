import { createBrowserRouter } from "react-router";
import HomeLayout from "../MainLayout/HomeLayout";
import Home from "../pages/Home";
import Courses from "../pages/Courses/Courses";
import Login from "../pages/Login/Login";
import DashboardLayout from "../MainLayout/DashboardLayout";
import MyEnrolledCourses from "../pages/MyEnrolledCourses/MyEnrolledCourses";
import AddCourse from "../pages/AddCourse/AddCourse";
import MyAddedCourses from "../pages/MyAddedCourses/MyAddedCourses";
import Register from "../pages/Register/Register";
import ProvetRouts from "../ProvetRout/ProvetRouts";
import CorsDetails from "../component/CorsDetails";

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
        path: "corsDeatails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all_courses/${params.id}`),
        element: (
          <ProvetRouts>
            <CorsDetails></CorsDetails>
          </ProvetRouts>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashbord",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "enroll",
        element: <MyEnrolledCourses></MyEnrolledCourses>,
      },
      {
        path: "addcoruss",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "myaddcoruss",
        element: <MyAddedCourses></MyAddedCourses>,
      },
    ],
  },
]);
