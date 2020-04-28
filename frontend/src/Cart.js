import React from 'react';
import { connect } from 'react-redux';

import { CardColumns } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OfferCard from './OfferCard';






function Cart(props) {

debugger

    return (
<Container>
       <CardColumns>
          {.map(offer => <OfferCard offer={offer}/> )}
       </CardColumns>
</Container> )


}

      
          
      
export default Cart;
