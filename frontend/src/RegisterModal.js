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

    fetch(`https://${window.location.hostname}:3000/users`,{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: form[0].value,
        password: form[1].value,
        password_confirmation: form[2].value
      })
    })
    .then(res => res.json())
    .then(registerInfo => {if (!registerInfo.error) {
          alert("User Created")   //TODO
          props.closeRegisterModal()
       } else {
         alert(registerInfo.error)   //TODO
       }
    })
    .catch(function (error) {
         alert(error)   //TODO
    })

  }

   return props.showRegisterModal ?
   (
  <div className="modal fade show" style={{"display" : "block" , "z-index" : "999999999"}} aria-modal="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Register</h4>
        </div>
        <div className="modal-body login-form-container">



                                    <form onSubmit={handleRegister}>
                                        <input name="user-email" placeholder="Email" type="email"/>
                                        <input type="password" name="user-password" placeholder="Password"/>
                                        <input type="password" name="user-password-confirmation" placeholder="Password Confirmation"/>
                                        <div className="button-box">
                                            <button type="submit" className="default-btn floatright">Register</button>
                                            <button type="button" className="default-btn floatleft" data-dismiss="modal" onClick={props.closeRegisterModal}>Close</button>
                                        </div>
                                    </form>

        </div>
        
      </div>
    </div>
  </div>
)
:
(null)



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
