import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { CardColumns } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OfferCard from './OfferCard';
import CartItem from './CartItem';



import CheckoutModal from './CheckoutModal';

import CartDropdownItem from './CartDropdownItem';


import { Link } from "react-router-dom";


import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



function CartDropdown(props) {



return (

                            <div className="header-cart-4 furits-cart">
                                <a className="icon-cart" href="/cart">
                                    <i className="pe-7s-shopbag"></i>
                                    <span className="handicraft-count">{props.cart.length}</span>
                                </a>
                                <ul className="cart-dropdown">

                                    { props.cart.map(offer => <CartDropdownItem offer={offer}/>) }

                                    <li className="cart-space">
                                        <div className="cart-sub">
                                            <h4>Subtotal</h4>
                                        </div>
                                        <div className="cart-price">
                                            <h4>${ props.cart.reduce((accum , offer) => accum + offer.price*offer.amount , 0) }</h4>
                                        </div>
                                    </li>
                                    <li className="cart-btn-wrapper">
                                        <a className="cart-btn btn-hover" href="/cart">view cart</a>
                                        <a className="cart-btn btn-hover" href="/checkout">checkout</a>
                                    </li>
                                </ul>
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

export default connect(mapStateToProps,mapDispatchToProps)(CartDropdown);


