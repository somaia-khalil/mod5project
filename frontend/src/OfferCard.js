import React from 'react';

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


const OfferCard = (props) => {

    return(

  <Card className="p-5">
    <Link to={`/offers/${props.offer.id}`}><Card.Img variant="top" src="https://pngimage.net/wp-content/uploads/2018/06/wegmans-logo-png-8.png" /></Link>
    <Card.Body>
      <Card.Title>{props.offer.id}</Card.Title>
      <Card.Text>
        This is a nice product
      </Card.Text>
    </Card.Body>
  </Card>

    )
}

export default OfferCard;
