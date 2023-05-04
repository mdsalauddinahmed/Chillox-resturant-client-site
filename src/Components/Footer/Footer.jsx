import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
      <footer className='bg-dark'>
      <div className="container mt- text-white text-center">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h3>About Us</h3>
            <p>We are a family-owned restaurant located in the heart of the city. Our menu features locally-sourced ingredients and traditional recipes passed down through generations.</p>
          </div>
          <div className="col-md-6 mt-5">
            <h3>Contact Us</h3>
            <p>123 Main St.</p>
            <p>City, ST 12345</p>
            <p>(123) 456-7890</p>
            <p>email@example.com</p>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>&copy; 2021 Restaurant Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;