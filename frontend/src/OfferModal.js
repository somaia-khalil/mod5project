import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';



const OfferModal = (props) => {

   const addToCart = () => {
      props.saveToCart(props.offer)
      props.closeOfferModal()
    }

   return props.showOfferModal ?
   (
  <div className="modal fade show" style={{"display" : "block" , "z-index" : "999999999"}} aria-modal="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{props.offer.product.name}</h4>
        </div>
        <div className="modal-body">


                       


		<div className="breadcrumb-area pt-205 pb-210" style="background-image: url(assets/img/bg/breadcrumb.jpg)">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <h2>product details</h2>
                    <ul>
                        <li><a href="#">home</a></li>
                        <li> product details </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="product-details ptb-100 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-7 col-12">
                        <div className="product-details-5 pr-70">
                            <img src="assets/img/product-details/l1-details-5.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5 col-12">
                        <div className="sidebar-active product-details-content">
                            <h3>Handcrafted Supper Mug</h3>
                            <div className="rating-number">
                                <div className="quick-view-rating">
                                    <i className="pe-7s-star red-star"></i>
                                    <i className="pe-7s-star red-star"></i>
                                    <i className="pe-7s-star"></i>
                                    <i className="pe-7s-star"></i>
                                    <i className="pe-7s-star"></i>
                                </div>
                                <div className="quick-view-number">
                                    <span>2 Ratting (S)</span>
                                </div>
                            </div>
                            <div className="details-price">
                                <span>$120.00</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmol tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                            <div className="product-color-2">
                                <h4 className="details-title">Color*</h4>
                                <div className="product-color-style2">
                                    <ul>
                                        <li className="orange"></li>
                                        <li className="blue2"></li>
                                        <li className="pink"></li>
                                        <li className="yellow"></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product-size-2">
                                <h4 className="details-title">Size*</h4>
                                <div className="product-size-style2">
                                    <ul>
                                        <li><a href="#">xl</a></li>
                                        <li><a href="#">ml</a></li>
                                        <li><a href="#">m</a></li>
                                        <li><a href="#">sl</a></li>
                                        <li><a href="#">ls</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="quickview-plus-minus">
                                <div className="cart-plus-minus">
                                    <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box"/>
                                </div>
                                <div className="quickview-btn-cart">
                                    <a className="btn-hover-black" href="#">add to cart</a>
                                </div>
                                <div className="quickview-btn-wishlist">
                                    <a className="btn-hover" href="#"><i className="pe-7s-like"></i></a>
                                </div>
                            </div>
                            <div className="product-details-cati-tag mt-35">
                                <ul>
                                    <li className="categories-title">Categories :</li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">electronics</a></li>
                                    <li><a href="#">toys</a></li>
                                    <li><a href="#">food</a></li>
                                    <li><a href="#">jewellery</a></li>
                                </ul>
                            </div>
                            <div className="product-details-cati-tag mtb-10">
                                <ul>
                                    <li className="categories-title">Tags :</li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">electronics</a></li>
                                    <li><a href="#">toys</a></li>
                                    <li><a href="#">food</a></li>
                                    <li><a href="#">jewellery</a></li>
                                </ul>
                            </div>
                            <div className="product-share">
                                <ul>
                                    <li className="categories-title">Share :</li>
                                    <li>
                                        <a href="#">
                                            <i className="icofont icofont-social-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="icofont icofont-social-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="icofont icofont-social-pinterest"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="icofont icofont-social-flikr"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-description-review-area pb-90">
            <div className="container">
                <div className="product-description-review text-center">
                    <div className="description-review-title nav" role="tablist">
                        <a className="active" href="#pro-dec" data-toggle="tab" role="tab" aria-selected="true">
                            Description
                        </a>
                        <a href="#pro-review" data-toggle="tab" role="tab" aria-selected="false">
                            Reviews (0)
                        </a>
                    </div>
                    <div className="description-review-text tab-content">
                        <div className="tab-pane active show fade" id="pro-dec" role="tabpanel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                        </div>
                        <div className="tab-pane fade" id="pro-review" role="tabpanel">
                            <a href="#">Be the first to write your review!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.closeOfferModal}>Close</button>
        </div>
      </div>
    </div>
  </div>
)
:
(null)

   return (
      <Modal show={props.showOfferModal} onHide={props.closeOfferModal}>
        <Modal.Header closeButton>
          <Modal.Title>{props.offer.product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Some details of this nice product...</p>
        <p>Buy now for only ${props.offer.price}!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeOfferModal}>
            Close
          </Button>
          <Button variant="primary" onClick={addToCart}>
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>
   )
}





const mapStateToProps = state => {
   return {
      cart: state.cart
   };
};

const mapDispatchToProps = dispatch => {
   return {
      saveToCart: (offer => dispatch({type: 'SAVE_TO_CART' , offer : offer}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(OfferModal);


