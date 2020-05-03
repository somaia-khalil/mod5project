
import OfferCard from "./OfferCard";
import React, { Component } from "react";

// import LoadingProducts from "../loaders/Products";
// import NoResults from "../empty-states/NoResults";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Zoom from 'react-reveal/Zoom';

 
import OwlCarousel from 'react-owl-carousel';  


const OfferCards = (props) => { 
   


return (
        <div className="product-style-area gray-bg-4 pb-105">
            <div className="container-fluid">
                <div className="section-title-furits bg-shape text-center mb-80">
                    <img src="/assets/img/icon-img/49.png" alt=""/>
                    <h2>Our Newest Products</h2>
                </div>
<OwlCarousel items={4}  
          className="product-fruit-slider owl-carousel"  
          loop  
          nav  
          margin={8} >

                {/* <div className="product-fruit-slider"> */}
                    <div className="product-fruit-wrapper">
                        <div className="product-fruit-img">
                            <img src="/assets/img/product/furits/1.jpg" alt=""/>
                            <div className="product-furit-action">
                                <a className="furit-animate-left" title="Add To Cart" href="/#">
                                    <i className="pe-7s-cart"></i>
                                </a>
                                <a className="furit-animate-right" title="Wishlist" href="/#">
                                    <i className="pe-7s-like"></i>
                                </a>
                            </div>
                        </div>
                        <div className="product-fruit-content text-center">
                            <h4><a href="/product-details.html">Pinapple Freash</a></h4>
                            <span>$20.99</span>
                        </div>
                    </div>
                    <div className="product-fruit-wrapper">
                        <div className="product-fruit-img">
                            <img src="/assets/img/product/furits/2.jpg" alt=""/>
                            <div className="product-furit-action">
                                <a className="furit-animate-left" title="Add To Cart" href="/#">
                                    <i className="pe-7s-cart"></i>
                                </a>
                                <a className="furit-animate-right" title="Wishlist" href="/#">
                                    <i className="pe-7s-like"></i>
                                </a>
                            </div>
                        </div>
                        <div className="product-fruit-content text-center">
                            <h4><a href="/product-details.html">Kropi Jussi</a></h4>
                            <span>$20.99</span>
                        </div>
                    </div>
                    <div className="product-fruit-wrapper">
                        <div className="product-fruit-img">
                            <img src="/assets/img/product/furits/3.jpg" alt=""/>
                            <div className="product-furit-action">
                                <a className="furit-animate-left" title="Add To Cart" href="/#">
                                    <i className="pe-7s-cart"></i>
                                </a>
                                <a className="furit-animate-right" title="Wishlist" href="/#">
                                    <i className="pe-7s-like"></i>
                                </a>
                            </div>
                        </div>
                        <div className="product-fruit-content text-center">
                            <h4><a href="/product-details.html">Freash Avocado</a></h4>
                            <span>$20.99</span>
                        </div>
                    </div>
                    <div className="product-fruit-wrapper">
                        <div className="product-fruit-img">
                            <img src="/assets/img/product/furits/4.jpg" alt=""/>
                            <div className="product-furit-action">
                                <a className="furit-animate-left" title="Add To Cart" href="/#">
                                    <i className="pe-7s-cart"></i>
                                </a>
                                <a className="furit-animate-right" title="Wishlist" href="/#">
                                    <i className="pe-7s-like"></i>
                                </a>
                            </div>
                        </div>
                        <div className="product-fruit-content text-center">
                            <h4><a href="/product-details.html">Grean Lemooon</a></h4>
                            <span>$20.99</span>
                        </div>
                    </div>
                    <div className="product-fruit-wrapper">
                        <div className="product-fruit-img">
                            <img src="/assets/img/product/furits/5.jpg" alt=""/>
                            <div className="product-furit-action">
                                <a className="furit-animate-left" title="Add To Cart" href="/#">
                                    <i className="pe-7s-cart"></i>
                                </a>
                                <a className="furit-animate-right" title="Wishlist" href="/#">
                                    <i className="pe-7s-like"></i>
                                </a>
                            </div>
                        </div>
                        <div className="product-fruit-content text-center">
                            <h4><a href="/product-details.html">Red Bedena</a></h4>
                            <span>$20.99</span>
                        </div>
                    </div>
                    <div className="product-fruit-wrapper">
                        <div className="product-fruit-img">
                            <img src="/assets/img/product/furits/1.jpg" alt=""/>
                            <div className="product-furit-action">
                                <a className="furit-animate-left" title="Add To Cart" href="/#">
                                    <i className="pe-7s-cart"></i>
                                </a>
                                <a className="furit-animate-right" title="Wishlist" href="/#">
                                    <i className="pe-7s-like"></i>
                                </a>
                            </div>
                        </div>
                        <div className="product-fruit-content text-center">
                            <h4><a href="/product-details.html">Olivo la deshion</a></h4>
                            <span>$20.99</span>
                        </div>
                    </div>
                    <div className="product-fruit-wrapper">
                        <div className="product-fruit-img">
                            <img src="/assets/img/product/furits/3.jpg" alt=""/>
                            <div className="product-furit-action">
                                <a className="furit-animate-left" title="Add To Cart" href="/#">
                                    <i className="pe-7s-cart"></i>
                                </a>
                                <a className="furit-animate-right" title="Wishlist" href="/#">
                                    <i className="pe-7s-like"></i>
                                </a>
                            </div>
                        </div>
                        <div className="product-fruit-content text-center">
                            <h4><a href="/product-details.html">Freash Blackberry</a></h4>
                            <span>$20.99</span>
                        </div>
                    </div>
               {/* </div>*/}
</OwlCarousel>
            </div>
        </div>
)


    //return <div className="products-wrapper">{view}</div>;



  }


export default OfferCards;



