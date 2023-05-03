import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [error,setError]=useState("")
    const navigate = useNavigate()
    const location =useLocation()
    const from = location.state?.from?.pathname || '/'
  
     const{signIn}=useContext(AuthContext)

 const handleLogin =event =>{
    event.preventDefault()
    const form= event.target;
    const email = form.email.value;
    const  password = form.password.value;
    event.target.reset()
    console.log(email, password)
    signIn(email,password)
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate( from,{replace:true})
        // navigate(from,{replace:true})
    })
    .catch(error =>{
         setError( 'username and password invalid');
    })

 }


    return (
        <Container className="w-25 mx-auto mt-5">
     <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
        <Form onSubmit={handleLogin} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name= 'password' placeholder="Password" />
        </Form.Group>
 

        <Button className='text-center' variant="secondary" type="submit">
           Login
        </Button>
        <br />
        <Form.Text className="text-muted">
            Don't have any account <Link to="/register">Register</Link>
          </Form.Text>
          <br />
        <Form.Text className="  text-warning">
         {error}
          </Form.Text>
         
      </Form>

        </Col>
        <Col lg={2}></Col>

     </Row>
     <Row>
         <Button variant='secondary' className='my-3'>SignIn by Google</Button> <br />
         <Button className='mb-5' variant="info">SignIn by Github</Button>
     </Row>
    </Container>
    );
};

export default Login;