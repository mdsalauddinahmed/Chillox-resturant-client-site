import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
             <p className='mt-5'>
             <span> Likes: {likes}</span>
             </p>
              
          </Col>
          <Col lg={3}>
            <Button className='btn-secondary'><Link to={`/recipe/${id}`}>View Recipes</Link></Button>
          </Col>

        </Row>
   
       </Container>
        );
};

export default SingleChef;