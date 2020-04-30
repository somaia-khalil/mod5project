import React, {  useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


const HeaderNavbar = (props) => {

    return (

  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img alt="" src="/img/logo1.png" height="30" className="d-inline-block align-top"/>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Stores</Nav.Link>
      <Nav.Link onClick={props.openZipcodeModal}>Change Area</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
    </Nav>

    { props.user ?  
       <div><Button variant="secondary" onClick={props.logout}>Logout</Button><Link to ="/deliveries"> <Button variant="secondary" >Deliveries</Button></Link></div>
    : <div><Button variant="secondary" onClick={props.openLoginModal}>Login</Button> <Button variant="secondary" onClick={props.openRegisterModal}>Register</Button> </div> }


  </Navbar>

)}


const mapStateToProps = state => {
   return {
      user: state.user
   };
};

const mapDispatchToProps = dispatch => {
   return {
      logout: (() => dispatch({type: 'LOGOUT'})),
      openLoginModal: (() => dispatch({type: 'OPEN_LOGIN_MODAL'})),
      closeLoginModal: (() => dispatch({type: 'CLOSE_LOGIN_MODAL'})),
      openRegisterModal: (() => dispatch({type: 'OPEN_REGISTER_MODAL'})),
      closeRegisterModal: (() => dispatch({type: 'CLOSE_REGISTER_MODAL'})),
      openZipcodeModal: (() => dispatch({type: 'OPEN_ZIPCODE_MODAL'})),
      closeZipcodeModal: (() => dispatch({type: 'CLOSE_ZIPCODE_MODAL'})),
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(HeaderNavbar);
