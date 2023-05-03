import React from 'react';
import Navigation from '../../Pages/shared_pages/Navber/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const RecipeLoyOut = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default RecipeLoyOut;