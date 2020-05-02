
import OfferCard from "./OfferCard";
import React, { Component } from "react";
import "./vegy.css"
// import LoadingProducts from "../loaders/Products";
// import NoResults from "../empty-states/NoResults";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Zoom from 'react-reveal/Zoom';


const OfferCards = (props) => { 
   let isLoaded = true
   let view
    
    if (props.offers.length <= 0 && !isLoaded) {
      view = <p>Loading ..</p>;
    } else if (props.offers.length <= 0 && isLoaded) {
      view =<p>No Results</p> ;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="div"
          className="products"
        >
          
         { props.offers.map( offer => <Zoom><OfferCard offer={offer}/></Zoom> ) }

        </CSSTransitionGroup>
      );
    }
    return <div className="products-wrapper">{view}</div>;
  }


export default OfferCards;



