import React, {  useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";




const OfferDetails = (props) => {
    const [offer, setOffer] = useState({price: 0 , amount: 0, product: {name: "", tradeIdentifiers_image: ""}});
    useEffect(() => {
        fetch(`http://localhost:3000/offers/${props.match.params.id}`)
          .then(res => res.json())
          .then(offer => {
            setOffer(offer)
          })
      },[props.match.params.id])



    return(
        <div> 
          <h1>{offer.product.name}</h1>
        <img src={offer.product.tradeIdentifiers_image}></img>
        <h2>{offer.price}</h2>
        <h2>{offer.amount}</h2>
        <Link onClick={()=>props.saveToCart(offer)}   to= "#">Add to cart</Link>    
       </div>
    ) 
}


const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
 
const mapDispatchToProps = dispatch => {
  return {
      saveToCart: (offer) => dispatch({type:'saveToCart', offer:offer })
   
  };
};



export default connect(mapStateToProps,mapDispatchToProps)(OfferDetails);