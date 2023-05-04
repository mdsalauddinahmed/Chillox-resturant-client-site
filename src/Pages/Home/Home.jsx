import React from 'react';
import { Container } from 'react-bootstrap';
 
import Banner from '../../Components/Banner/Banner';
import Navigation from '../shared_pages/Navber/Navigation';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ListOfChefs from '../../Components/ListOfChefs/ListOfChefs';
import Review from '../../Components/Review/Review';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';

const Home = () => {
    return (
        <> 
         
        <Banner></Banner>
        <ListOfChefs></ListOfChefs>
        <Review></Review>
        <NewsLetter></NewsLetter>
        </>
    );
};

export default Home;