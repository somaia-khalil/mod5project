
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

<li className="col-xs-12 col-sm-6 col-md-4">
<div className="product-container">
<div>
<div className="product-image-container">
<a href={`/offers/${props.offer.id}`}><img src={product.tradeIdentifiers_image} width="220" height="200"/> </a>
</div>
</div>
<div className="right-block">
<h5> <a className="product-name" href={`/offers/${props.offer.id}`}> {product.name} </a></h5>
</div>
<div className="functional-buttons clearfix">
<div className="wishlist"> <a> Add to Wishlist </a></div>
</div>
<div className="content_price"> <span itemprop="price" className="price product-price"> {props.offer.price} </span></div>
</div>
</li>





    )
}





export default Product;