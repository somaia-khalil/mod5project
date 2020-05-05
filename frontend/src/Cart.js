import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { CardColumns } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OfferCard from './OfferCard';
import CartItem from './CartItem';
import Bread from './Bread'


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
        <Bread/>
        <div className="cart-main-area pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 className="cart-heading">Cart</h1>
                        <form action="#">
                            <div className="table-content table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>remove</th>
                                            <th>images</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        { props.cart.map(offer => <CartItem offer={offer}/>) }
                                        
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-5 ml-auto">
                                    <div className="cart-page-total">
                                        <h2>Cart totals</h2>
                                        <ul>
                                            <li>Subtotal<span>${ props.cart.reduce((accum , offer) => accum + offer.price*offer.amount , 0) }</span></li>
                                            <li>Total<span>${props.cart.reduce((accum , offer) => accum + offer.price*offer.amount , 0) }</span></li>
                                        </ul>
                                        <a href="/checkout">Proceed to checkout</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
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


