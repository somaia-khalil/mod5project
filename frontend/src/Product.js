
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import React, {  useState, useEffect } from 'react';



const Product = (props) => {
    const [product, setProduct] = useState({product: {name: "", tradeIdentifiers_image: ""} });

    useEffect(() => {
        fetch(`http://localhost:3000/products/${props.offer.product_id}`)
          .then(res => res.json())
          .then(product => {
           setProduct(product)
          })
      },[props.offer])
    
    return(
        <Link to={`/offers/${props.offer.id}`} >
        <div>
            <h1>{product.name}</h1>
            <img src={product.tradeIdentifiers_image}></img>
            <h2>{props.offer.price}</h2>
            <h2>{props.offer.amount}</h2>
        </div>
        </Link>
    )
}





export default Product;