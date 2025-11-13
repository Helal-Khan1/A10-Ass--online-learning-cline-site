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
import Loding from "../pages/AddCourse/Loding/Loding";
import UpdateCours from "../pages/updatecours/updateCours";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    hydrateFallbackElement: <Loding></Loding>,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loding></Loding>,
        element: <Home></Home>,
      },
      {
        path: "corses",
        hydrateFallbackElement: <Loding></Loding>,
        element: <Courses></Courses>,
      },
      {
        path: "corsDeatails/:id",
        hydrateFallbackElement: <Loding></Loding>,
        loader: ({ params }) =>
          fetch(
            `https://a10-assignment-cline-server-site.vercel.app/all_courses/${params.id}`
          ),
        element: (
          <ProvetRouts>
            <CorsDetails></CorsDetails>
          </ProvetRouts>
        ),
      },
      {
        path: "login",
        hydrateFallbackElement: <Loding></Loding>,
        element: <Login></Login>,
      },
      {
        path: "register",
        hydrateFallbackElement: <Loding></Loding>,
        element: <Register></Register>,
      },
      {
        path: "loding",
        hydrateFallbackElement: <Loding></Loding>,
        element: <Loding></Loding>,
      },
    ],
  },
  {
    path: "/dashbord",
    hydrateFallbackElement: <Loding></Loding>,
    element: (
      <ProvetRouts>
        <DashboardLayout></DashboardLayout>
      </ProvetRouts>
    ),
    children: [
      {
        path: "enroll",
        hydrateFallbackElement: <Loding></Loding>,
        element: (
          <ProvetRouts>
            <MyEnrolledCourses></MyEnrolledCourses>
          </ProvetRouts>
        ),
      },
      {
        path: "addcoruss",
        hydrateFallbackElement: <Loding></Loding>,
        element: (
          <ProvetRouts>
            <AddCourse></AddCourse>
          </ProvetRouts>
        ),
      },
      {
        path: "myaddcoruss",
        hydrateFallbackElement: <Loding></Loding>,
        element: (
          <ProvetRouts>
            <MyAddedCourses></MyAddedCourses>
          </ProvetRouts>
        ),
      },
      {
        path: "update/:id",
        hydrateFallbackElement: <Loding></Loding>,
        element: (
          <ProvetRouts>
            <UpdateCours></UpdateCours>
          </ProvetRouts>
        ),
      },
    ],
  },
]);
