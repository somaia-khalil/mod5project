import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';



const LoginModal = (props) => {

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
       props.login(userInfo)
       props.closeLoginModal()
    })
  }


   return props.showLoginModal ?
   (
  <div className="modal fade show" style={{"display" : "block" , "z-index" : "999999999"}} aria-modal="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Login</h4>
        </div>
        <div className="modal-body">


                            <div className="login-form-container">
                                <div className="login-form">
                                    <form action="#" method="post">
                                        <input type="text" name="user-name" placeholder="Username"/>
                                        <input type="password" name="user-password" placeholder="Password"/>
                                        <div className="button-box">
                                            
                                            <button type="submit" className="default-btn floatright">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>



        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.closeLoginModal}>Close</button>
        </div>
      </div>
    </div>
  </div>
)
:
(null)


/*
   return (
      <Modal show={props.showLoginModal} onHide={props.closeLoginModal}>
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
          <Button variant="secondary" onClick={props.closeLoginModal}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Login
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
   )
*/
}

const mapStateToProps = state => {
   return {
      user: state.user,
      showLoginModal: state.showLoginModal
   };
};

const mapDispatchToProps = dispatch => {
   return {
      login: (user => dispatch({type: 'LOGIN' , user: user})),
      openLoginModal: (() => dispatch({type: 'OPEN_LOGIN_MODAL'})),
      closeLoginModal: (() => dispatch({type: 'CLOSE_LOGIN_MODAL'}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginModal);
