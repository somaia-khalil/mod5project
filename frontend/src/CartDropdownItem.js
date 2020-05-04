import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { CardColumns } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OfferCard from './OfferCard';
import CartItem from './CartItem';




import { Link } from "react-router-dom";


import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



const CartDropdownItem = (props) => {



return (

                                    <li className="single-product-cart">
                                        <div className="cart-img">
                                            <a href={`/offers/${props.offer.id}`}><img src={props.offer.product.tradeIdentifiers_image} alt={props.offer.product.name} style={{"height": "101px"}}/></a>
                                        </div>
                                        <div className="cart-title">
                                            <h5><a href={`/offers/${props.offer.id}`}>{props.offer.product.name}</a></h5>
                                            <h6><a href={`/offers/${props.offer.id}`}>{props.offer.product.brand}</a></h6>
                                            <span>${props.offer.price} x {props.offer.amount}</span>
                                        </div>
                                        <div className="cart-delete">
                                            <a href="/#" onClick={e => {e.preventDefault() ; props.deleteFromCart(props.offer)}}><i className="ti-trash"></i></a>
                                        </div>
                                    </li>
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
      addToCart: ((offer,amount) => dispatch({type : 'SAVE_TO_CART' , offer : offer , amount : amount})),
      deleteFromCart: (offer => dispatch({type: 'DELETE_FROM_CART' , offer : offer})),
      openLoginModal: (() => dispatch({type: 'OPEN_LOGIN_MODAL'})),
      closeLoginModal: (() => dispatch({type: 'CLOSE_LOGIN_MODAL'}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(CartDropdownItem);


