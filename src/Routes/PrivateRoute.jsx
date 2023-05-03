import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,reload}=useContext(AuthContext)
    const location =useLocation()
 if(reload){
    return <>Loading...<Spinner animation="grow" /></>
 }
   if(user){
    return children
   }

    return <Navigate state={{from:location}} to="/login"></Navigate>
};

export default PrivateRoute;