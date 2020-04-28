import React, {  useState, useEffect } from 'react';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';




const handleLogin = (e) => {
    let form = e.target
    e.preventDefault()

    fetch("http://localhost:3000/login",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: form[1].value,
        password: form[2].value
      })
    })
    .then(res => res.json())
    .then(userInfo => {
        console.log(userInfo)
       localStorage.token = userInfo.token
      // localStorage.setItem("token", userInfo.token)
    })
  }



const HeaderNavbar = () => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const LoginModal = () => {
  return (
      <Modal show={show} onHide={handleClose}>
<Form onSubmit={handleLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Login
          </Button>
        </Modal.Footer>
</Form>
      </Modal>
  );
}





    return (

  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img alt="" src="/img/logo1.png" height="30" className="d-inline-block align-top"/>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>

    <LoginModal/>
    <Button variant="primary" onClick={handleShow}>Login</Button>
  </Navbar>

)}

export default HeaderNavbar
