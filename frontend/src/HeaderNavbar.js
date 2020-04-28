import React, {  useState, useEffect } from 'react';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';






const HeaderNavbar = () => {

const [showRegister, setShowRegister] = useState(false);
const handleCloseRegister = () => setShowRegister(false);
const handleShowRegister = () => setShowRegister(true)


const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [loginStatus, setLoginStatus] = useState(false);


const handleLogout = () => {
    setLoginStatus(false)
    localStorage.clear()
}



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
       localStorage.userInfo = userInfo
       setLoginStatus(localStorage.userInfo.token != "")
       handleClose()
      // localStorage.setItem("token", userInfo.token)
    })
  }



const handleRegister = (e) => {
    let form = e.target
    e.preventDefault()

    fetch("http://localhost:3000/users",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: form[1].value,
        password: form[2].value,
        password_confirmation: form[3].value
      })
    })
    .then(res => res.json())
    .then(userInfo => {
        console.log(userInfo)
       handleCloseRegister()
      // localStorage.setItem("token", userInfo.token)
    })
  }


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


const RegisterModal = () => {
  return (
      <Modal show={showRegister} onHide={handleCloseRegister}>
<Form onSubmit={handleRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
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
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Repeat Password" />
  </Form.Group>

</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRegister}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Register
          </Button>
        </Modal.Footer>
</Form>
      </Modal>
  );
}





    return (

  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img alt="" src="/img/logo1.png" height="30" className="d-inline-block align-top"/>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
<div>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
</div>

    <LoginModal/>
    <RegisterModal/>

    { loginStatus ?  
       <div><Button variant="primary" onClick={handleLogout}>Logout</Button><Button variant="primary">User Area</Button></div>
    : <div><Button variant="primary" onClick={handleShow}>Login</Button> <Button variant="primary" onClick={handleShowRegister}>Register</Button> </div> }


  </Navbar>

)}

export default HeaderNavbar
