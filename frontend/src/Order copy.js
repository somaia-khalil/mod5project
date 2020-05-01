import React, { Component } from "react";
import { Link } from "react-router-dom";

const Order = (props) =>  {
  // state = {
  //   quantity: 1,
  //   subtotal: 0
  // };
  return( 
      <React.Fragment>
        <tr>
          <td data-th="Product">
            <div className="row">
              <div className="col-sm-2 hidden-xs">
                <img
                 src={props.order.offer.product.tradeIdentifiers_image}
                  alt={props.order.offer.product.name}
                  className="img-responsive"
                />
              </div>
              <div className="col-sm-10">
                {/* <Link to={product}> */}
                  <h4 className="nomargin">{props.order.offer.product.name}</h4>
                {/* </Link> */}
                <p>{props.order.offer.product.description}</p>
              </div>
            </div>
          </td>
          <td data-th="Price">£{props.order.offer.price}</td>
          <td data-th="Quantity">
            <div class="def-number-input number-input safari_only">
              <button class="minus" onClick={() => console.log()} />
              <input
                class="quantity"
                min="0"
                name="quantity"
                value={props.order.amount}
                type="number"
              />
              <button class="plus" onClick={() => console.log()} />
            </div>
          </td>
          <td data-th="Subtotal" className="text-center">
            £{props.order.offer.price * props.order.amount}
          </td>
          <td className="actions" data-th="">
            <button className="btn btn-danger btn-sm">
              <i
                className="fa fa-trash-o"
                onClick={() => console.log()}
              />
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  
}

export default Order;



