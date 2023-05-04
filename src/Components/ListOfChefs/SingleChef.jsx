import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './chefs.css'
import LazyLoad from 'react-lazy-load';

const SingleChef = ({data}) => {
     const{id,name,specialty,picture,likes,recipes,experience}=data
    return (
       <Container>
        <Row className='my-4'>
          <Col lg={3}>
          
          </Col>
          <Col className='mt-2' lg={6}>


          <div class="card " >
  <div className="row g-0">
    <div className="col-md-4">
   <LazyLoad offset={1000} once>
   <img className='  m-3 rounded' style={{width:"200px",height:"200px"}} src={picture} alt="" />
   </LazyLoad>
    </div>
    <div className="col-md-8">
      <div className="card-body ms-5 p-3 mt-4">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <span> Recipes: {recipes}</span>
          <span className='mx-4'>  Likes: {likes }</span>
        </p>
        <h4 className="card-text">Experience:<small className="text-muted">{experience} </small></h4>
        <button className='mt-4 rounded' ><Link className='text-decoration-none text-dark ' to={`/recipe/${id} `}>View Recipes</Link></button>
      </div>
    </div>
  </div>
</div>
         
         


 
              
          </Col>
          <Col lg={3}>
         
          </Col>

        </Row>
   
       </Container>
        );
};

export default SingleChef;