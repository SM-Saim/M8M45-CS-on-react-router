import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayOuts from "./layouts/MainLayOuts";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import myCreatedRoute from "./Route/Route";
// Understanding-2
// const myCreatedRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>This is a Router</div>,
//   },
//   {
//     path: "/about",
//     element: <div>This is all about</div>,
//   },
//   {
//     path: "/products",
//     element: <div>This is all Products</div>,
//   },
// ]);
// Understanding-2
// const myCreatedRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <section>
//         <div>This is Fixed item</div>
//         <Outlet></Outlet>
//       </section>
//     ),
//     children: [
//       {
//         path: "/",
//         element: <div>This is home route</div>,
//       },
//       {
//         path: "/products",
//         element: <div>This is Prooooooducts</div>,
//       },
//     ],
//   },
// ]);
// const myCreatedRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayOuts></MainLayOuts>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "/products",
//         element: <Products></Products>,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>
);
