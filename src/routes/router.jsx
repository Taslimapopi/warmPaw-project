import { createBrowserRouter } from "react-router";
import HomeLayout from "../lauOuts/HomeLayout";
import Home from "../components/homelayout/Home";
import Services from "../components/homelayout/Services";
import AuthLayout from "../lauOuts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
        {
            path:"",
            element:<Home></Home>,

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
    children:[
        {
            path:'/auth/login',
            element:<Login></Login>
        },
        {
            path:"/auth/register",
            element:<SignUp></SignUp>
        },
    ]
  },
  {
    path: "/*",
    element: <h2>err0r404</h2>,
  },
  {
    path: "/myprofile",
    element: <h2>my profile</h2>,
  },
]);

export default router;
