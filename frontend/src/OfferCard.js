import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import OfferModal from './OfferModal'
import "./vegy.css"
import Counter from "./Counter";

const OfferCard = (props) => {

   const [showOfferModal , setShowOfferModal] = useState(false);
   const closeOfferModal = () => setShowOfferModal(false);
   const openOfferModal  = () => setShowOfferModal(true);
   const [amount , setAmount] = useState(0)
   const [isAdded , setAdded] = useState(false)
   useEffect(() => setAdded(!!props.cart.find(offer => offer.id == props.offer.id)), [props.cart])
   

    return (
      <div className="product">
         <OfferModal showOfferModal={showOfferModal} closeOfferModal={closeOfferModal} offer={props.offer} />
        <div className="product-image">
          <img
            src={props.offer.product.tradeIdentifiers_image}
            alt={props.offer.product.name}
            onClick={openOfferModal}
          />
        </div>
        <h4 className="product-name">{props.offer.product.name}</h4>
        <p className="product-price">${props.offer.price}</p>
        <Counter
          productQuantity ={amount}
          updateQuantity={setAmount}
         //  resetQuantity={0}
        />
        <div className="product-action">
          <button
            className={!isAdded ? "" : "added"}
            type="button"
            onClick={()=>props.saveToCart(props.offer)}          >
            {!isAdded ? "ADD TO CART" : "✔ ADDED"}
          </button>
        </div>
      </div>
    );
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

export default connect(mapStateToProps,mapDispatchToProps)(OfferCard);








