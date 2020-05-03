

    import { connect } from 'react-redux';
    import {  useState, useEffect } from 'react';
    import { CardColumns } from 'react-bootstrap';
    import { Container } from 'react-bootstrap';
    import { Row } from 'react-bootstrap';
    import OfferCard from './OfferCard';
    import React, { Component } from "react";
    import { Link } from "react-router-dom";

    import Order from './Order'

const Delivery = (props) => {
        return (
          <React.Fragment>
            <div className="container">
              <table id="cart" className="table table-hover table-condensed">
                <thead>
                  <tr>
                    <th style={{ width: "50%" }}>Product</th>
                    <th style={{ width: "10%" }}>Price</th>
                    <th
                      style={{
                        width: "8 %"
                      }}
                    >
                      Quantity
                    </th>
                    <th style={{ width: "22%" }} className="text-center">
                      Subtotal
                    </th>
                    <th style={{ width: "10%" }} >Availabilty</th>
                    
                  </tr>
                </thead>
                <tbody>
                 { props.delivery.orders.map(order => <Order order={order}/>) }
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <Link to="/products" className="btn btn-warning">
                        <i className="fa fa-angle-left" /> Continue Shopping
                      </Link>
                    </td>
                    <td colSpan="2" className="hidden-xs" />
                    <td className="hidden-xs text-center">
                      <strong>Total: </strong>
                    </td>
                    <td>
                      <Link to="/products" className="btn btn-success btn-block">
                        Checkout
                        <i className="fa fa-angle-right" />
                      </Link>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </React.Fragment>
        );
      }
    
      const mapStateToProps = state => {
       return {
          user: state.user,
          cart: state.cart
       };
    };
    
    
    const mapDispatchToProps = dispatch => {
       return {
          openLoginModal: (() => dispatch({type: 'OPEN_LOGIN_MODAL'})),
          closeLoginModal: (() => dispatch({type: 'CLOSE_LOGIN_MODAL'}))
       };
    };
    
    export default connect(mapStateToProps,mapDispatchToProps)(Delivery);
    
    
    
    




