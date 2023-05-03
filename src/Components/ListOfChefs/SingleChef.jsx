import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './chefs.css'

const SingleChef = ({data}) => {
     const{id,name,specialty,picture,likes,recipes,experience}=data
    return (
       <Container>
        <Row className='my-4'>
          <Col lg={2}>
          
          </Col>
          <Col className='mt-5' lg={8}>


         
          <Card  >
        <div className='d-flex justify-content-between align-items-center'>
        <div>
         <Card.Img variant="top" style={{height:"300px",width:"300px"}} className=' ' src={picture} />
         </div>
     
       
        <div>
          <Card.Title><h2 className='text-bold'>{name}</h2></Card.Title>
             <p className='text-bold'>Experience:<small> {experience}</small></p>
             <span> Recipes:{recipes}</span>
             <p className='mt-5'>
             <span> Likes: {likes}</span>
             </p>
        </div>
        <div>
        <Button className='btn-secondary'><Link to={`/recipe/${id}`}>View Recipes</Link></Button>
        </div>
        </div>
      
    </Card>
         







           {/* <div className='d-flex'>
           <div>
             <img className='rounded' style={{height:"300px",width:"300px"}} src= alt="" />
             </div>
            <div>
           
            </div>
             <div>
             
             </div>
           </div> */}
              
          </Col>
          <Col lg={2}>
         
          </Col>

        </Row>
   
       </Container>
        );
};

export default SingleChef;