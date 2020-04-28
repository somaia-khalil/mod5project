import React, {  useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";



import { CardGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OfferCard from './OfferCard';

import Slider from "react-slick";



const OfferCards = (props) => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    return (
<Container>
<Row>

        <Slider {...settings}>


          { props.offers.map( offer => <OfferCard offer={offer}/>) }
        </Slider>
</Row>
</Container>
    );

}





export default OfferCards;
