import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import OfferModal from './OfferModal';


const OfferCard = (props) => {

   const [showOfferModal , setShowOfferModal] = useState(false);
   const closeOfferModal = () => setShowOfferModal(false);
   const openOfferModal  = (e) => {e.preventDefault(); setShowOfferModal(true);};
   
   
   

return (
                    <div className="col-lg-4 col-xl-3 col-md-6">
                        <div className="product-fruit-wrapper mb-60">
                            <div className="product-fruit-img">
                                <img src={props.offer.product.tradeIdentifiers_image} alt={props.offer.product.name}/>
                                <div className="product-furit-action">
                                    <a className="furit-animate-left" title="Add To Cart" href="/#" onClick={e => {e.preventDefault() ; props.addToCart(props.offer,1)}}>
                                        <i className="pe-7s-cart"></i>
                                    </a>
                                    <a className="furit-animate-right" title="Wishlist" href="/#">
                                        <i className="pe-7s-like"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="product-fruit-content text-center">
                                <h4><a href={`/offers/${props.offer.id}`}>{props.offer.product.name}</a></h4>
                                <span>${props.offer.price}</span>
                            </div>
                        </div>
                    </div>
)


/*

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
*/


  }


  const mapStateToProps = state => {
   return {
      cart: state.cart
   };
};

const mapDispatchToProps = dispatch => {
   return {
      addToCart: ((offer , amount) => dispatch({type: 'ADD_TO_CART' , offer : offer , amount : amount}))

   };
};

export default connect(mapStateToProps,mapDispatchToProps)(OfferCard);








