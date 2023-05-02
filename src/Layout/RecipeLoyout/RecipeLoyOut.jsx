import React from 'react';
import Navigation from '../../Pages/shared_pages/Navber/Navigation';
import { Outlet } from 'react-router-dom';

const RecipeLoyOut = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            
        </div>
    );
};

export default RecipeLoyOut;