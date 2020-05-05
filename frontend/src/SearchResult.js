
import OfferCard from "./OfferCard";
import React, { Component } from "react";





const SearchResult = (props) => { 
   
return (
        <div className="product-style-area pt-130 pb-30 wow fadeInUp">
            <div className="container">
                <div className="section-title-furits text-center mb-95">
                    <img src="/assets/img/icon-img/49.png" alt=""/>
                    <h2>Products</h2>
                </div>
                <div className="row">
                   { props.offers.map(offer => <OfferCard offer={offer}/>) }
                </div>
            </div>
        </div>
)


  }


export default SearchResult;






