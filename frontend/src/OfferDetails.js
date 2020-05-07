import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';



const OfferDetails = (props) => {


 const [offer, setOffer] = useState(null);
    useEffect(() => {
        fetch(`https://${window.location.hostname}:3000/offers/${props.match.params.offer_id}`)
          .then(res => res.json())
          .then(offer => {
            setOffer(offer)
          })
      },[props.match.params.offer_id])



  

   return offer ? (
<div>     


		<div className="breadcrumb-area pt-205 pb-210" style={{"background-image": "url(/img/whychose.jpg)"}}>
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <h2>product details</h2>
                    <ul>
                        <li><a href="/">home</a></li>
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
                            <img src={offer.product.tradeIdentifiers_image} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5 col-12">
                        <div className="sidebar-active product-details-content">
                            <h3>{offer.product.name}</h3>
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
                                <span>${offer.price}</span>
                            </div>
                            <p>{offer.product.brand}</p>
                            <p>{offer.product.description}</p>
                            <p>{offer.product.countryOfOrigin}</p>
                            
                            
                            <div className="quickview-plus-minus">
                                <div className="cart-plus-minus">
                                    <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box"/>
                                </div>
                                <div className="quickview-btn-cart">
                                    <a onClick={e => {e.preventDefault() ; props.addToCart(offer,1)}} className="btn-hover-black" href="">add to cart</a>
                                </div>
                                <div className="quickview-btn-wishlist">
                                    <a className="btn-hover" href="#" onClick={e => {e.preventDefault() ; props.addToWishlist(offer,1)}}><i className="pe-7s-like"></i></a>
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





</div>)
: ("Loading...")

}





const mapStateToProps = state => {
   return {
      cart: state.cart
   };
};

const mapDispatchToProps = dispatch => {
   return {
    addToCart: ((offer , amount) => dispatch({type: 'ADD_TO_CART' , offer : offer , amount : amount})),
    addToWishlist: ((offer , amount) => dispatch({type: 'ADD_TO_WISHLIST' , offer : offer , amount : amount}))

   };
};

export default connect(mapStateToProps,mapDispatchToProps)(OfferDetails);


