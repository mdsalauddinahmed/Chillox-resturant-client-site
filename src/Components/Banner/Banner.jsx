import React from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import banner from './Banner.css'
 import cover1 from '../../assets/Chillox.jpg'
 

const Banner = () => {
  return (
    <div className="">
       <Carousel>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 h-80% h"
          src= {cover1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1> Stay with Chillox</h1>
          <p> Chillox is a restaurant that offers a relaxing and chill atmosphere for diners to enjoy delicious food and drinks. The menu features a variety of dishes ranging from appetizers, salads, and entrees to desserts and specialty drinks. Whether you're looking for a romantic dinner for two, a family outing, or a night out with friends, Chillox has something for everyone.  </p>
        </Carousel.Caption>
      </Carousel.Item>
       
      
    </Carousel>
    </div>
  );
};

export default Banner;
