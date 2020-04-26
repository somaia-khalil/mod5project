
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import React, {  useState, useEffect } from 'react';
import Product from './Product'



const StoreCategory = (props) => {
    const [category, setCategory] = useState({ offers: [], categories:[] });

    useEffect(() => {
        fetch(`http://localhost:3000/stores/${props.match.params.id}/categories/${props.match.params.categoryId}`)
          .then(res => res.json())
          .then(category => {
           setCategory(category)
          })
      },[props.match.params.categoryId,props.match.params.id])
    

    return(
        <div>
         {category.categories.map((category)=> <p><Link to={`/stores/${props.match.params.id}/categories/${category.id}`}>{category.name}</Link></p>)}
         {category.offers.map((offer)=> <Product  offer={offer}/>)}
        </div>
    )
}





export default StoreCategory;