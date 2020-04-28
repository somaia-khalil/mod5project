import React, {  useState, useEffect } from 'react';

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


const OfferCard = (props) => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

    return (

  <Card className="p-5">

 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



    <Link onClick={handleShow}><Card.Img variant="top" src="https://pngimage.net/wp-content/uploads/2018/06/wegmans-logo-png-8.png" /></Link>
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
