import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,reload}=useContext(AuthContext)
    const location =useLocation()
 if(reload){
    return  <>
    <Spinner animation="border" size="sm" />
    <Spinner animation="border" />
    <Spinner animation="grow" size="sm" />
    <Spinner animation="grow" />
  </>
 }
   if(user){
    return children
   }

    return <Navigate state={{from:location}} to="/login" replace></Navigate>
};

export default PrivateRoute;