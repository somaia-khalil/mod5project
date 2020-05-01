import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


import { Container } from 'react-bootstrap';

import { CardColumns } from 'react-bootstrap';
import CategoryCard from './CategoryCard';
import OfferCard from './OfferCard';
import OfferCards from './OfferCards';



const CategoryDetails = (props) => {

    const [category, setCategory] = useState({name: "" , categories: []});
    useEffect(() => {
        fetch(`http://localhost:3000/stores/${props.match.params.store_id}/categories/${props.match.params.category_id}`)
          .then(res => res.json())
          .then(category => {
            setCategory(category)
          })
      },[props.match.params.store_id , props.match.params.category_id])


    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/stores/${props.match.params.store_id}/categories/${props.match.params.category_id}/offers`)
          .then(res => res.json())
          .then(offers => {
            setOffers(offers)
          })
      },[props.match.params.store_id , props.match.params.category_id])


   return (
 <Container>
 <h1> {category.name} </h1>
       <CardColumns>
          { category.categories.map( category => <CategoryCard store_id={props.match.params.store_id} category={category}/> )}
       </CardColumns>

   <h1> Offers </h1> <OfferCards offers={offers}/>

</Container>
    )
}


const mapStateToProps = state => {
   return {
      cart: state.cart
   };
};

const mapDispatchToProps = dispatch => {
   return {
      saveToCart: (offer => dispatch({type: 'SAVE_TO_CART' , offer : offer}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(CategoryDetails);


