import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';


const Order = (props) =>  {

console.log(props.order)


  return(
   <tr>
   
      <td className="product-thumbnail">
         <a href={`/offers/${props.order.offer.product.id}`}><img src={props.order.offer.product.tradeIdentifiers_image} alt={props.order.offer.product.name} style={{"height" : "101px"}}/></a>
      </td>
      <td className="product-name"><a href={`/offers/${props.order.offer.id}`}>{props.order.offer.product.name}</a></td>
      <td className="product-price-cart"><span className="amount">${props.order.offer.price}</span></td>
      <td className="product-quantity">
         <input value={props.order.amount} type="number"/>
      </td>
      <td className="product-subtotal">${props.order.offer.price*props.order.amount}</td>
   </tr>
)



}



  

export default (Order);




