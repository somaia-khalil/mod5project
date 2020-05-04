import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';


const CartItem = (props) =>  {

console.log(props.offer)


  return(
                                         <tr>
                                            <td className="product-remove"><a href="#" onClick={e => {e.preventDefault() ; props.deleteFromCart(props.offer)}}><i className="pe-7s-close"></i></a></td>
                                            <td className="product-thumbnail">
                                                <a href={`/offers/${props.offer.id}`}><img src={props.offer.product.tradeIdentifiers_image} alt={props.offer.product.name} style={{"height" : "101px"}}/></a>
                                            </td>
                                            <td className="product-name"><a href={`/offers/${props.offer.id}`}>{props.offer.product.name}</a></td>
                                            <td className="product-price-cart"><span className="amount">${props.offer.price}</span></td>
                                            <td className="product-quantity">
                                                <input value={props.offer.amount} type="number" onChange={(e) => props.addToCart(props.offer,e.target.value)}/>
                                            </td>
                                            <td className="product-subtotal">${props.offer.price*props.offer.amount}</td>
                                        </tr>
)



}



  const mapStateToProps = state => {
   return {
      cart: state.cart
   };
};

const mapDispatchToProps = dispatch => {
   return {
      addToCart: ((offer , amount) => dispatch({type: 'ADD_TO_CART' , offer : offer , amount : amount})),
      deleteFromCart: (offer => dispatch({type: 'DELETE_FROM_CART' , offer : offer}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(CartItem);




