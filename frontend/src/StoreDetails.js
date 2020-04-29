import React, {  useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import CategoryAccordion from './CategoryAccordion';


import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Slider from "react-slick";
import { Container } from 'react-bootstrap';


import OfferCard from './OfferCard';


const StoreDetails = (props) => {


    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/stores/${props.match.params.id}/categories`)
          .then(res => res.json())
          .then(categories => {
            setCategories(categories)
          })
      },[props.match.params.id])

    const [store, setStore] = useState({name: ""});
    useEffect(() => {
        fetch(`http://localhost:3000/stores/${props.match.params.id}`)
          .then(res => res.json())
          .then(store => {
            setStore(store)
          })
      },[props.match.params.id])


    const [offers, setOffers] = useState([]);

    const searchOffers = (e) => {
        e.preventDefault()
        let form = e.target
        fetch(`http://localhost:3000/stores/${props.match.params.id}/search/${form[0].value}`)
          .then(res => res.json())
          .then(offers => {
            setOffers(offers)
          })
      }




const settings = {
      dots: false,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };


    return(

<div>

<Navbar bg="primary" variant="dark">
<Navbar.Brand>{store.name}</Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    <Form onSubmit={searchOffers} inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button type="submit" variant="outline-light">Search</Button>
    </Form>
  </Navbar>

    { offers.length > 0 &&
      <Container>
        <Slider {...settings}>
      { offers.map( offer => <OfferCard offer={offer}/>) }
        </Slider>
      </Container>  }


<Container>
<CategoryAccordion store={props.match.params.id} categories={categories} />
</Container>

</div>

)


}


export default StoreDetails;
