import React from 'react'
import { Form, Button } from "react-bootstrap";

const Login= () => {
    return (
        <>
               <h2>Login</h2>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        

        {/* submit button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> 
        </>
    )
}

export default Login;