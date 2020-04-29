import React from 'react';
import { connect } from 'react-redux';

import { CardColumns } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OfferCard from './OfferCard';


import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


function Cart(props) {

const sendOrder = () => {

    //TODO require login!

      if (!props.user) {
         props.openLoginModal()
          // TODO display some fancy error message to require login
         return
      }

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
       console.log(userInfo)
    })
  }

    return (
<Container> 
          <Button variant="secondary" onClick={sendOrder}>
            Checkout
          </Button>

       <CardColumns>
          { props.cart.map(offer => <OfferCard offer={offer}/> ) }
       </CardColumns>
</Container> )


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


