import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";


import { CardColumns } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OfferCard from './OfferCard';
import CartItem from './CartItem';



import CheckoutModal from './CheckoutModal';
import Bread from './Bread'


import { Link } from "react-router-dom";


import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';





function Checkout(props) {
  
    let history = useHistory();
    const [userInfoCheckout , setUserInfo] = useState({});
    
    
    const sendOrder = (e) => {
    e.preventDefault()
      let form = e.target
      let userInfoCheckout = {
       state : form[0].value,
       firstname: form[1].value,
       address1 : form[2].value,
       address2 : form[3].value,
       city : form[4].value,
       zip : form[4].value,
       email : form[4].value,
       phone : form[5].value
      }
     
    fetch(`https://${window.location.hostname}:3000/deliveries`,{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${props.user.token}`
      },
      body: JSON.stringify(
          {userInfoCheckout: userInfoCheckout, orders: props.cart.map(offer => {return {id : offer.id , amount : offer.amount}})}
          )
    })
    .then(res => res.json())
    .then(userInfo => {
       // TODO redirect to checkout page
       
       history.push('/deliveries')
       
    })
    .catch(console.log)
  }




return (
    <div>  
    <Bread/>
          {/*  <!-- checkout-area start --> */}
          <form action="#" onSubmit={(e)=>sendOrder(e)}>
            <div className="checkout-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            
                                <div className="checkbox-form">						
                                    <h3>Billing Details</h3>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="country-select">
                                                <label>State <span className="required">*</span></label>
                                                <select>
                                                  <option value="volvo">New York</option>
                                                  <option value="saab">Pennsylvania</option>
                                                  <option value="mercedes">Massachusetts</option>
                                                  <option value="audi">New Jersey</option>
                                                  <option value="audi2">Virginia</option>
                                                  <option value="audi3">North Carolina</option>
                                                </select> 										
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>First Name <span className="required">*</span></label>										
                                                <input type="text" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Last Name <span className="required">*</span></label>										
                                                <input type="text" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Address <span className="required">*</span></label>
                                                <input type="text" placeholder="Street address" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">									
                                                <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Town / City <span className="required">*</span></label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>State / County <span className="required">*</span></label>										
                                                <input type="text" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Postcode / Zip <span className="required">*</span></label>										
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Email Address <span className="required">*</span></label>										
                                                <input type="email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Phone  <span className="required">*</span></label>										
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list create-acc">	
                                                <input id="cbox" type="checkbox" />
                                                <label>Create an account?</label>
                                            </div>
                                            <div id="cbox_info" className="checkout-form-list create-account">
                                                <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                                <label>Account password  <span className="required">*</span></label>
                                                <input type="password" placeholder="password" />	
                                            </div>
                                        </div>								
                                    </div>													
                                </div>
                         
                        </div>	
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="your-order">
                                <h3>Your order</h3>
                                <div className="your-order-table table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product-name">Product</th>
                                                <th className="product-total">Total</th>
                                            </tr>							
                                        </thead>
                                        <tbody>
                                        {props.cart.map(offer => 
                                            <tr className="cart_item">
                                                <td className="product-name">
                                                    {offer.product.name} <strong className="product-quantity"> ×{offer.amount}</strong>
                                                </td>
                                                <td className="product-total">
                                                    <span className="amount">${offer.price*offer.amount}.00</span>
                                                </td>
                                            </tr>
                                            )}
                                        </tbody>
                                        <tfoot>
                                            <tr className="cart-subtotal">
                                                <th>Cart Subtotal</th>
                                                <td><span className="amount">£{ props.cart.reduce((accum , offer) => accum + offer.price*offer.amount , 0) }.00</span></td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Order Total</th>
                                                <td><strong><span className="amount">${ props.cart.reduce((accum , offer) => accum + offer.price*offer.amount , 0) }.00</span></strong>
                                                </td>
                                            </tr>								
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="payment-method">
                                    <div className="payment-accordion">
                                        <div className="panel-group" id="faq">
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h5 className="panel-title"><a data-toggle="collapse" aria-expanded="true" data-parent="#faq" href="#payment-1">Direct Bank Transfer.</a></h5>
                                                </div>
                                                <div id="payment-1" className="panel-collapse collapse show">
                                                    <div className="panel-body">
                                                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h5 className="panel-title"><a className="collapsed" data-toggle="collapse" aria-expanded="false" data-parent="#faq" href="#payment-2">Cheque Payment</a></h5>
                                                </div>
                                                <div id="payment-2" className="panel-collapse collapse">
                                                    <div className="panel-body">
                                                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h5 className="panel-title"><a className="collapsed" data-toggle="collapse" aria-expanded="false" data-parent="#faq" href="#payment-3">PayPal</a></h5>
                                                </div>
                                                <div id="payment-3" className="panel-collapse collapse">
                                                    <div className="panel-body">
                                                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-button-payment">
                                            <input  type="submit" value="Place order" />
                                        </div>								
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            </form>
            </div>                                
)



}

        
      
const mapStateToProps = state => {
   return {
      user: state.user,
      cart: state.cart
   };
};

const mapDispatchToProps = dispatch => {
   return {
      saveToCart: (offer => dispatch({type : 'SAVE_TO_CART' , offer : offer})),
      openLoginModal: (() => dispatch({type: 'OPEN_LOGIN_MODAL'})),
      closeLoginModal: (() => dispatch({type: 'CLOSE_LOGIN_MODAL'}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);



