import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

import OfferModal from './OfferModal'


const OfferCard = (props) => {

   const [showOfferModal , setShowOfferModal] = useState(false);
   const closeOfferModal = () => setShowOfferModal(false);
   const openOfferModal  = () => setShowOfferModal(true);

   return (
     <Card className="p-5">

        <OfferModal showOfferModal={showOfferModal} closeOfferModal={closeOfferModal} offer={props.offer} />

    <Link onClick={openOfferModal}><Card.Img variant="top" src={props.offer.product.tradeIdentifiers_image} /></Link>
    <Card.Body>
      <Card.Title>{props.offer.id}</Card.Title>
      <Card.Text>
        This is a nice product
      </Card.Text>
    </Card.Body>
  </Card>

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

export default connect(mapStateToProps,mapDispatchToProps)(OfferCard);
