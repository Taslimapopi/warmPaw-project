import { createBrowserRouter } from "react-router";
import HomeLayout from "../lauOuts/HomeLayout";
import Home from "../components/homelayout/Home";
import Services from "../components/homelayout/Services";
import AuthLayout from "../lauOuts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ServiceDetails from "../pages/ServiceDetails";
import Allservices from "../components/Allservices";
import ForgetPassword from "../pages/ForgetPassword";
import MyProfile from "../pages/MyProfile";
import Updateprofile from "../pages/Updateprofile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Allservices></Allservices>,
      },
      {
        path: "/category/:categoryId",
        element: <Services></Services>,
        loader: () => fetch("/services.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/auth/forgetpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/auth/myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path:"/auth/updateProfile",
        element: <Updateprofile></Updateprofile>
      }
    ],
  },
  {
    path: "/*",
    element: <h2>err0r404</h2>,
  },

  {
    path: "/service-details/:id",
    element: <ServiceDetails></ServiceDetails>,
  },
]);

export default router;
