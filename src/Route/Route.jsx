import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../layouts/MainLayOuts";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Product from "../Pages/Product/Product";
import DashBoardLayout from "../layouts/DashBoardLayout";
import Profile from "../Pages/Profile/Profile";
import EditedProfile from "../Pages/EditedProfile/EditedProfile";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "/products/:id",
        element: <Product></Product>,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path: "/dashboard",
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
          {
            path: "/dashboard",
            element: <DashBoard></DashBoard>,
          },
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>,
          },
          {
            path: "/dashboard/editedprofile",
            element: <EditedProfile></EditedProfile>,
          },
        ],
      },
    ],
  },
]);

export default myCreatedRoute;
