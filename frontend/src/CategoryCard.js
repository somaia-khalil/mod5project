import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";



const CategoryCard = (props) => {

   return (
    <Card className="p-5">
    <Link to={`/stores/${props.store_id}/categories/${props.category.id}`}><Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIQa0mXO-RJlM2shWs-x0NqyPDZmzpIZYBYYacLp90VyOe9DFv&usqp=CAU" /> { /* props.category.image */} </Link>
    <Card.Body>
      <Card.Title>{props.category.name}</Card.Title>
      <Card.Text>
        This is a nice category
      </Card.Text>
    </Card.Body>
  </Card>

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

export default connect(mapStateToProps,mapDispatchToProps)(CategoryCard);


