import React, {  useState, useEffect } from 'react';
import { Link } from "react-router-dom";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CategoryAccordion from './CategoryAccordion';


import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Slider from "react-slick";
import { Container } from 'react-bootstrap';


import OfferCard from './OfferCard';


import ScannerModal from "./ScannerModal";


import { CardColumns } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';

import CategoryDetails from './CategoryDetails';
import OfferCards from './OfferCards';

import OfferModal from './OfferModal';

import CategoryCards from './CategoryCards';




const StoreDetails = (props) => {


    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`https://${window.location.hostname}:3000/stores/${props.match.params.store_id}/categories`)
          .then(res => res.json())
          .then(categories => {
            setCategories(categories)
          })
      },[props.match.params.id])

    const [store, setStore] = useState({name: ""});
    useEffect(() => {
        fetch(`https://${window.location.hostname}:3000/stores/${props.match.params.store_id}`)
          .then(res => res.json())
          .then(store => {
            setStore(store)
          })
      },[props.match.params.id])


    const [offers, setOffers] = useState([]);

    const searchOffers = (e) => {
        e.preventDefault()
        let form = e.target
        fetch(`https://${window.location.hostname}:3000/stores/${props.match.params.store_id}/search/${form[0].value}`)
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



   const [showOfferModal , setShowOfferModal] = useState(false);
   const closeOfferModal = () => setShowOfferModal(false);
   const openOfferModal  = () => setShowOfferModal(true);


  const [showScannerModal , setShowScannerModal] = useState(false);
  const closeScannerModal = () => setShowScannerModal(false);
  const openScannerModal  = () => setShowScannerModal(true);

  const [offer, setOffer] = useState(null);

  const onDetected = barcode => {
     console.log(barcode)
     fetch(`https://${window.location.hostname}:3000/stores/${props.match.params.store_id}/offers/search/${barcode}`)
          .then(res => res.json())
          .then(offer => {
            console.log(offer)
            setOffer(offer)
            if (offer)
               openOfferModal();
            else
               alert("Not found!");
          })
  };


    return(

      <Switch>
               <Route exact path="/stores/:store_id/categories/:category_id" render={routerProps => <CategoryDetails {...routerProps}/>} />
               <Route exact path="/stores/:store_id/" render={routerProps => <CategoryCards store_id={props.match.params.store_id} categories={categories}/>} />
      </Switch>
)





/*

<div>

<Navbar bg="primary" variant="dark">
<Navbar.Brand>{store.name}</Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>

      { offer && <OfferModal showOfferModal={showOfferModal} closeOfferModal={closeOfferModal} offer={offer} /> }
      { showScannerModal && <ScannerModal showScannerModal={showScannerModal} closeScannerModal={closeScannerModal} onDetected={onDetected} /> }

      <button onClick={openScannerModal}>Scan</button>






    <Form onSubmit={searchOffers} inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button type="submit" variant="outline-light">Search</Button>
    </Form>
  </Navbar>

    { offers.length > 0 && <OfferCards offers={offers}/> }



//<CategoryAccordion store={props.match.params.id} categories={categories} /> 

<Container>
            <Switch>
               <Route exact path="/stores/:store_id/categories/:category_id" render={routerProps => <CategoryDetails {...routerProps}/>} ></Route>
               <Route exact path="/stores/:store_id/" render={routerProps => <div>

       <CardColumns> { categories.map( category => <CategoryCard store_id={props.match.params.store_id} category={category}/> ) } </CardColumns>
</div>
               }/>
            </Switch>

</Container>


</div>

)

*/

}


export default StoreDetails;
