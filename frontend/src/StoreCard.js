import React from 'react';

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


const StoreCard = (props) => {

    return(
                     <div className="col-lg-4 col-md-4">
                        <div className="furits-banner-wrapper mb-30 wow fadeInUp">
                            <img src="/img/wegmans3.png" alt={props.store.name}/>
                            <div className="furits-banner-content">
                                <h4 style={{"color":"black"}}>{props.store.name}</h4>
                                <p style={{"color":"black"}}> {props.store.street}, {props.store.zip} {props.store.city}, {props.store.county} {props.store.state_name}</p>
                                <a className="furits-banner-btn btn-hover" href={`/stores/${props.store.id}`}>Shop Now</a>
                            </div>
                        </div>
                    </div>
)

/*


  <Card className="p-5" key={props.store.id} >
    <Link to={`/stores/${props.store.id}`}><Card.Img variant="top" src="https://pngimage.net/wp-content/uploads/2018/06/wegmans-logo-png-8.png" /></Link>
    <Card.Body>
      <Card.Title>{props.store.name}</Card.Title>
      <Card.Text>
        This is a nice store.
      </Card.Text>
    </Card.Body>
  </Card>

    )
*/

}

export default StoreCard;
