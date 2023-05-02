import React from 'react';
import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
 
  } from "react-router-dom";
  import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import LoginLayout from '../Layout/LoginLayout';
import Register from '../Pages/Register/Register';
  const router = createBrowserRouter([
     {
        path:"/",
        element:<LoginLayout></LoginLayout>,
    children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        }
    ]
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