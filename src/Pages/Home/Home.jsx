import React from 'react';
import { Container } from 'react-bootstrap';
 
import Banner from '../../Components/Banner/Banner';
import Navigation from '../shared_pages/Navber/Navigation';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ListOfChefs from '../../Components/ListOfChefs/ListOfChefs';

const Home = () => {
    return (
        <> 
         
        <Banner></Banner>
        <ListOfChefs></ListOfChefs>
        </>
    );
};

export default Home;