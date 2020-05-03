import React, { Component } from "react";
import { Link } from "react-router-dom";


const CartItem = (props) =>  {
  // state = {
  //   quantity: 1,
  //   subtotal: 0
  // };


  return(
                                         <tr>
                                            <td className="product-remove"><a href="#"><i className="pe-7s-close"></i></a></td>
                                            <td className="product-thumbnail">
                                                <a href="#"><img src={props.order.product.tradeIdentifiers_image} alt={props.order.product.name} style={{"height" : "101px"}}/></a>
                                            </td>
                                            <td className="product-name"><a href="#">{props.order.product.name}</a></td>
                                            <td className="product-price-cart"><span className="amount">${props.order.price}</span></td>
                                            <td className="product-quantity">
                                                <input value={props.order.amount} type="number"/>
                                            </td>
                                            <td className="product-subtotal">${props.order.price*props.order.amount}</td>
                                        </tr>
)



}

export default CartItem;



