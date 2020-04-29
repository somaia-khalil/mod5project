import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';



const OfferModal = (props) => {

   const addToCart = () => {
      props.saveToCart(props.offer)
      props.closeOfferModal()
    }

   return (
      <Modal show={props.showOfferModal} onHide={props.closeOfferModal}>
        <Modal.Header closeButton>
          <Modal.Title>{props.offer.product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Some details of this nice product...</p>
        <p>Buy now for only ${props.offer.price}!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeOfferModal}>
            Close
          </Button>
          <Button variant="primary" onClick={addToCart}>
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>
   )
}





const mapStateToProps = state => {
   return {
      cart: state.cart
   };
};

const mapDispatchToProps = dispatch => {
   return {
      saveToCart: (offer => dispatch({type: 'SAVE_TO_CART' , offer : offer}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(OfferModal);

