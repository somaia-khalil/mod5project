import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


import { Container } from 'react-bootstrap';

import { CardColumns } from 'react-bootstrap';
import CategoryCard from './CategoryCard';
import OfferCard from './OfferCard';
import OfferCards from './OfferCards';


import CategoryCards from './CategoryCards';


import OwlCarousel from 'react-owl-carousel';

const Banner = (props) => {


return (
        <div className="slider-area">

<OwlCarousel items={1}  
          className="slider-active-2 owl-carousel" 
          dots={false}
          autoplay 
          loop>

                <div className="single-slider-4 bg-img furits-slider" style={{"background-image": "url(/img/main.png)"}}>
                    <div className="container">
                        <div className="fadeinup-animated furits-content text-center">
                            <img className="animated" src="/img/logo1.png" alt=""/>
                            <p className="animated">Health is not about the weight you lose. But about the life you gain!</p>
                            <a className="furits-slider-btn btn-hover animated" href="/stores">Shop Now</a>
                            <img className="animated slide-img-position" src="/img/subMain.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="single-slider-4 bg-img furits-slider" style={{"background-image": "url(/img/main4.jpg)"}}>
                    <div className="container">
                        <div className=" fadeinup-animated furits-content text-center">
                            <img className="animated" src="/assets/img/slider/12.png" alt=""/>
                            <p className="animated">Find a Store
                              More than one hundred stores across seven states</p>
                            <a className="furits-slider-btn btn-hover animated" href="/stores">Shop Now</a>
                            <img className="animated slide-img-position slide-img-position-2" src="/img/subMain.png" alt=""/>
                        </div>
                    </div>
                </div>

            </OwlCarousel>

            <div className="slider-social">
                <span>Follow us on:  </span>
                <ul>
                    <li><a href="/#"><i className="ti-facebook"></i></a></li>
                    <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                    <li><a href="/#"><i className="ti-pinterest"></i></a></li>
                </ul>
            </div>
        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Banner);


