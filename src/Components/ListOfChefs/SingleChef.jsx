import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const SingleChef = ({data}) => {
     const{id,name,specialty,picture,likes,recipes,experience}=data
    return (
       <Container>
        <Row className='my-4'>
          <Col lg={3}>
            <img className='rounded' style={{height:"300px",width:"300px"}} src={picture} alt="" />
          </Col>
          <Col className='mt-5' lg={6}>
             <h2 className='text-bold'>{name}</h2>
             <p className='text-bold'>Experience:<small> {experience}</small></p>
             <span> Recipes:{recipes}</span>
              
          </Col>
          <Col lg={3}>
            <button className='mt-5'> View Recipes</button>
          </Col>

        </Row>
   
       </Container>
        );
};

export default SingleChef;