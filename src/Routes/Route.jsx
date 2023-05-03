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
import About from '../Pages/About/About';
import Blog from '../Pages/Blog/Blog';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../Erropage/ErrorPage';
 
  const router = createBrowserRouter([
     {
        path:"/",
        element:<LoginLayout></LoginLayout>,
        errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
         path:'about',
         element:<About></About>
        },
        {
         path:'blog',
         element:<Blog></Blog>
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
        errorElement:<ErrorPage></ErrorPage>,
        children:[
          {
            path:':id',
            element: <PrivateRoute><Recipe></Recipe></PrivateRoute> ,
            loader:({params})=>fetch(`https://bonolota-server-mdsalauddinahmed.vercel.app/recipe/${params.id}`)
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