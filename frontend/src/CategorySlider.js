
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import React, {  useState, useEffect } from 'react';
import Product from './Product';
import OfferCard from './OfferCard';


import Slider from "react-slick";
import { Container } from 'react-bootstrap';


const StoreCategory = (props) => {

 
   const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/stores/${props.store}/categories/${props.category.id}`)
          .then(res => res.json())
          .then(offers => {
           setOffers(offers)
          })
      },[props.category,props.store])



const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };


    return (
      <Container width="50%">

<br/>

<br/>

        <Slider {...settings}>

{ offers.map( offer => <OfferCard offer={offer}/>) }

        </Slider>

<br/>

<br/>

<br/>
      </Container>

)


}





export default StoreCategory;
