import React from 'react';

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


const StoreCard = (props) => {

    return(

  <Card className="p-5">
    <Link to={`/stores/${props.store.id}`}><Card.Img variant="top" src="https://pngimage.net/wp-content/uploads/2018/06/wegmans-logo-png-8.png" /></Link>
    <Card.Body>
      <Card.Title>{props.store.name}</Card.Title>
      <Card.Text>
        This is a nice store.
      </Card.Text>
    </Card.Body>
  </Card>

    )
}

export default StoreCard;
