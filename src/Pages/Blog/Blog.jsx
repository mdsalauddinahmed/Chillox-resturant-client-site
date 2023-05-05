import React from "react";
import { Container, Row } from "react-bootstrap";
 

const Blog = () => {
   
  return (
    <Container>
 
      <Row>
        <h2>Uncontrolled vs Controlled Components in React?</h2>
        <h4>Controlled Components:</h4>
        <p>
          In a controlled component, the form data is managed by the React
          component's state. The state is used to set the initial values of the
          form fields, and then updated every time the user interacts with the
          form. When the form is submitted, the updated state values are used to
          submit the form data.Controlled components provide more control over
          the form data and can be used to enforce validation rules, manipulate
          data before it is submitted, and implement complex form logic.
        </p>
        <h4>Uncontrolled Components</h4>
        <p>
          In an uncontrolled component, the form data is managed by the browser.
          The component doesn't have access to the current values of the form
          fields. Instead, it relies on event handlers to capture the form data
          when the form is submitted.Uncontrolled components can be useful for
          simple forms where you don't need to enforce complex validation rules.
        </p>
        <hr />
      </Row>
      <Row>
        <h2>Validating React Props using PropTypes?</h2>
        <p>
          PropTypes is a library in React that allows you to specify the types
          of props that a component should expect. This can help catch errors
          early and ensure that components receive the correct types of props.
        </p>
        <hr />
      </Row>
      <Row>
        <h2>Node.js vs Express.js?</h2>
        <p>
          Node.js is a runtime environment for JavaScript that allows you to run
          JavaScript on the server-side. It provides a set of built-in modules
          and APIs for building web applications. Express.js is a framework
          built on top of Node.js that provides a higher-level API for building
          web applications. It provides a set of features and utilities for
          handling HTTP requests and responses, routing, middleware, and more.
          While Node.js provides the core functionality for building web
          applications, Express.js provides a higher-level API and additional
          features that can simplify and speed up the development process.
        </p>
        <hr />
      </Row>
      <Row>
        <h2>Custom Hooks in React?</h2>
        <p  className="mb-5" >
          A custom hook in React is a function that allows you to reuse stateful
          logic across multiple components. Custom hooks allow you to extract
          common logic from your components and encapsulate it into a reusable
          function. To create a custom hook, you can use the useEffect and
          useState hooks, as well as any other React hooks that you need.
        </p>
         
      </Row>
       
    </Container>
  );
};

export default Blog;
