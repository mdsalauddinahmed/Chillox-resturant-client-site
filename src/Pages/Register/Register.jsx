import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const {user,CreateUser}=useContext(AuthContext)
  const [error,setError]=useState("")
  const [Value,setValue]=useState("")
    
   const handleSubmit=event=>{
    event.preventDefault()
    const form =event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if(!name || !photo || !email || !password){
        alert("Must be fill up all input")
        //  setValue("Must be fill up all input")
    }
    if(password.length<6){
        alert('password atlest six character')
        // setError("password atleast six character")
    }
    event.target.reset();
     
    console.log(name,photo,email,password)
    CreateUser(email, password)
    .then(result =>{
        const createdUser = result.user;
        console.log(createdUser)
    })
    .catch(error=>{
        console.log(error)
    })
   }





    return (
        <Container className="w-25 mx-auto mt-5">
        <h2>Please  Register, {user.displayName} </h2>
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type=" text" name='name' placeholder="Enter your name" />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image url</Form.Label>
            <Form.Control type="text" name='photo' placeholder="Enter  Image url" />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" />
           
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" />
          </Form.Group>
   
  
          <Button variant="primary"  type="submit">
          Register
          </Button>
          <br />
          <Form.Text className="text-muted">
              Don't have any account <Link to="/login"> Login</Link>
            </Form.Text>
            <br />
           
           
        </Form>
      </Container>
    );
};

export default Register;