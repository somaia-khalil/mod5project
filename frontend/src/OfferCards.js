import React from 'react';


import { CardColumns } from 'react-bootstrap';
import OfferCard  from './OfferCard';


const OfferCards = (props) => {
   return (
       <CardColumns>
          { props.offers.map( offer => <OfferCard offer={offer}/> ) }
       </CardColumns>
    )
}

export default OfferCards;


