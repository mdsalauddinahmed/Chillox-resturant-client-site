import React from "react";
import { Card, Container } from "react-bootstrap";
import slide from '../../assets/slide.png'

const Banner = () => {
  return (
    <div className="">
      <Card className="bg-dark text-white">
        <Card.Img src= {slide} alt="Card image" />
        <Card.ImgOverlay className=" text-center" >
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Banner;
