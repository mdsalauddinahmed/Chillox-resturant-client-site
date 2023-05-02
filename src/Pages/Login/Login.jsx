import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className="w-25 mx-auto mt-5">
      <h2>Please Login</h2>
      <Form   >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name= 'password' placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check" />
        </Form.Group>

        <Button variant="primary" type="submit">
           Login
        </Button>
        <br />
        <Form.Text className="text-muted">
            Don't have any account <Link to="/register">Register</Link>
          </Form.Text>
          <br />
        <Form.Text className="  text-warning">
            
          </Form.Text>
        <Form.Text className="text-muted">
            
          </Form.Text>
      </Form>
    </Container>
    );
};

export default Login;