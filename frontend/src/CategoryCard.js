import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";



const CategoryCard = (props) => {

   return (
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-wrapper mb-30 wow fadeInUp">
                            <div className="blog-img-2">
                                <a href={`/stores/${props.store_id}/categories/${props.category.id}`}><img alt="" src={props.category.img}/></a>
                            </div>
                            <div className="blog-info-wrapper-2 text-center">
                                <h3><a href={`/stores/${props.store_id}/categories/${props.category.id}`}>{props.category.name}</a></h3>
                            </div>
                        </div>
                    </div>
)






/*
(
    <Card className="p-5">
    <Link to={`/stores/${props.store_id}/categories/${props.category.id}`}><Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIQa0mXO-RJlM2shWs-x0NqyPDZmzpIZYBYYacLp90VyOe9DFv&usqp=CAU" />  </Link>
    <Card.Body>
      <Card.Title>{props.category.name}</Card.Title>
      <Card.Text>
        This is a nice category
      </Card.Text>
    </Card.Body>
  </Card>

    )
*/
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


