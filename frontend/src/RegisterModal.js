import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';



const RegisterModal = (props) => {


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
       props.closeRegisterModal()
      // localStorage.setItem("token", userInfo.token)
    })
  }

   return (
  <Modal show={props.showRegisterModal} onHide={props.closeRegisterModal}>
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
          <Button variant="secondary" onClick={props.closeRegisterModal}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Register
          </Button>
        </Modal.Footer>
       </Form>
     </Modal>
   )
}

const mapStateToProps = state => {
   return {
      showRegisterModal: state.showRegisterModal
   };
};

const mapDispatchToProps = dispatch => {
   return {
      openRegisterModal: (() => dispatch({type: 'OPEN_REGISTER_MODAL'})),
      closeRegisterModal: (() => dispatch({type: 'CLOSE_REGISTER_MODAL'}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(RegisterModal);
