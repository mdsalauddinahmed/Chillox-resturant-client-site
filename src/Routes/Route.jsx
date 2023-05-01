import React from 'react';
import {
    RouterProvider,
    createBrowserRouter,
 
  } from "react-router-dom";
  import Home from '../Pages/Home/Home';
  const router = createBrowserRouter([
     {
        path:"/",
        element:<Home></Home>
     }
  ])
const Route = () => {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Route;