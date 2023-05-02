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
import RecipeLoyOut from '../Layout/RecipeLoyout/RecipeLoyout';
import Recipe from '../Pages/Recipe/Recipe';
 
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
     },
     {
        path:'recipe',
        element:<RecipeLoyOut></RecipeLoyOut>,
        children:[
          {
            path:':id',
            element: <Recipe></Recipe> ,
            loader:({params})=>fetch(`http://localhost:5000/recipe/${params.id}`)
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