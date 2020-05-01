import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { CardColumns } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OfferCard from './OfferCard';
import OfferCards from './OfferCards';



import CheckoutModal from './CheckoutModal';


import { Link } from "react-router-dom";


import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



function Cart(props) {

   const [showCheckoutModal , setShowCheckoutModal] = useState(false);
   const closeCheckoutModal = () => setShowCheckoutModal(false);
   const openCheckoutModal  = () => setShowCheckoutModal(true);



const checkoutCart = () => {
      if (!props.user) 
         props.openLoginModal();
      else
         openCheckoutModal();
  }

    return (

<div>

<Navbar bg="primary" variant="dark">
<Navbar.Brand>Cart</Navbar.Brand>
<Nav className="mr-auto"></Nav>
<Button onClick={checkoutCart} variant="outline-light">Checkout Cart</Button>
</Navbar>

<CheckoutModal showCheckoutModal={showCheckoutModal} closeCheckoutModal={closeCheckoutModal}/>

    <OfferCards offers={props.cart}/>
     
</div>
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
      saveToCart: (offer => dispatch({type : 'SAVE_TO_CART' , offer : offer})),
      openLoginModal: (() => dispatch({type: 'OPEN_LOGIN_MODAL'})),
      closeLoginModal: (() => dispatch({type: 'CLOSE_LOGIN_MODAL'}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);


