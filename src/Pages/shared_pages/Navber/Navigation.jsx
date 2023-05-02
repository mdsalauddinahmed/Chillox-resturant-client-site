import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
 
 
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Container>
          <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link to="/home" className='mx-4 text-decoration-none text-dark'>Home</Link>
            <Link to="/about" className='mx-4 text-decoration-none text-dark'>About Us</Link>
            <Link to="/blog" className='mx-4 text-decoration-none text-dark'>Blogs</Link>
          </Nav>
          
            <Button variant="outline-success"><Link className='text-decoration-none text-dark' to="/login">Login</Link></Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Navigation;