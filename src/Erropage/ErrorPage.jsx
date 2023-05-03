import React from 'react';
import { Container } from 'react-bootstrap';
import errorPage from '../../public/error.jpg'
import Err from './Err.css'

const ErrorPage = () => {
    return (
        <Container>
            <img className='change mt-3' src={errorPage} alt="" />
        </Container>
    );
};

export default ErrorPage;