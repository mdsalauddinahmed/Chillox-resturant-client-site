import React from 'react';
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img4 from '../../../assets/img4.jpg'
import img3 from '../../../assets/chillox-uttara.jpg'
import { Container, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const View = () => {
    return (
        <Container>
            <Row className='my-4'>

          
             <img    src={img1} alt="" /> 
            
            
            <img  className='my-2' src={img2} alt="" />
           
               
            <img className='my-2'  src={img3} alt="" /> 
          
           
            
           <img src={img4} alt="" /> 
           
           
           
       
        
            </Row>
        </Container>
    );
};

export default View;