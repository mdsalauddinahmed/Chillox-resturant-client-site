import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
       <div className='bg-dark p-5'>
         <Container>
           
           <Row className=' text-white'>
           
          <Col lg={6}> 
          <h2>
             <h2>footer left</h2>
          </h2>
          </Col>
          <Col className='text-center' lg={6}> 
            <h3>Footer right</h3>
          </Col>
        </Row>
        
        </Container>
       </div>
    );
};

export default Footer;