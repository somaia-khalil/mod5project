import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { CardColumns } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OfferCard from './OfferCard';
import WishlistItem from './WishlistItem';
import Bread from './Bread'


import CheckoutModal from './CheckoutModal';


import { Link } from "react-router-dom";


import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



function Wishlist(props) {

    

return (
        <div>
        <Bread/>
        <div className="cart-main-area pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 className="cart-heading">Wishlist</h1>
                        <form action="#">
                            <div className="table-content table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>remove</th>
                                            <th>images</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        { props.wishlist.map(offer => <WishlistItem offer={offer}/>) }
                                        
                                    </tbody>
                                </table>
                            </div>
                            
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </div>
)

}
        
      
const mapStateToProps = state => {
   return {
      user: state.user,
      wishlist: state.wishlist
   };
};

const mapDispatchToProps = dispatch => {
   return {
      saveToWishlist: ((offer,amount) => dispatch({type : 'SAVE_TO_WISHLIST' , offer : offer, amount: amount})),
      deleteFromWishlist: (offer => dispatch({type : 'DELETE_FROM_WISHLIST' , offer : offer})),
      openLoginModal: (() => dispatch({type: 'OPEN_LOGIN_MODAL'})),
      closeLoginModal: (() => dispatch({type: 'CLOSE_LOGIN_MODAL'}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(Wishlist);


