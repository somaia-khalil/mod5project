import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';



const CheckoutModal = (props) => {


const sendOrder = () => {
    fetch("http://localhost:3000/deliveries",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${props.user.token}`
      },
      body: JSON.stringify({ orders: props.cart.map(offer => {return {id : offer.id , amount : offer.amount}})})
    })
    .then(res => res.json())
    .then(userInfo => {
       // TODO redirect to checkout page
       props.closeCheckoutModal()
    })
  }


   return (
      <Modal show={props.showCheckoutModal} onHide={props.closeCheckoutModal}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Some details of this nice product...</p>
        <p>We need your address and stufff here</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeCheckoutModal}>
            Close
          </Button>
          <Button variant="primary" onClick={sendOrder}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
   )
}





const mapStateToProps = state => {
   return {
      user: state.user,
      cart: state.cart
   };
};

const mapDispatchToProps = dispatch => {
   return {
      openLoginModal: (() => dispatch({type: 'OPEN_LOGIN_MODAL'})),
      closeLoginModal: (() => dispatch({type: 'CLOSE_LOGIN_MODAL'}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutModal);



