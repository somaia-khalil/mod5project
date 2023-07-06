
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import React, {  useState, useEffect } from 'react';

import OfferCard from './OfferCard';


import Slider from "react-slick";
import { Container } from 'react-bootstrap';


const CategorySlider = (props) => {

 
   const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/stores/${props.store}/categories/${props.category.id}`)
          .then(res => res.json())
          .then(offers => {
           setOffers(offers)
          })
      },[props.category,props.store])



const settings = {
      dots: false,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow:3,
      slidesToScroll: 3
    };


    return (


        <Slider {...settings}>

{ offers.map( offer => <OfferCard key={offer.id} offer={offer}/>) }

        </Slider>


)


}





export default CategorySlider;

