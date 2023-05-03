import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
 
 
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUser } from 'react-icons/fa';


const Navigation = () => {
 const { user,logOut} = useContext(AuthContext)
const handleLogOut=()=>{
  logOut()
  .then()
  .catch(error=>console.log(error))
}



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
           <Link to="/" className='mx-4 text-decoration-none text-dark'>Home</Link>
            <Link to="/about" className='mx-4 text-decoration-none text-dark'>About Us</Link>
            <Link to="/blog" className='mx-4 text-decoration-none text-dark'>Blogs</Link>
          </Nav>
          {
            user&&
            <FaUser style={{fontSize:'2rem'}} ></FaUser>
          }
          { user?
            
            <Button onClick={handleLogOut} variant="outline-success"><Link className='text-decoration-none text-dark' to="/login">LogOut</Link></Button>:
            <Button variant="outline-success"><Link className='text-decoration-none text-dark' to="/login">Login</Link></Button>}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Navigation;