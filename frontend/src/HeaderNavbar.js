import React, {  useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CartDropdown from './CartDropdown';



const HeaderNavbar = (props) => {
    
    
    const [offers, setOffers] = useState([]);

    const searchOffers = (e) => {
      
        e.preventDefault()
        let form = e.target
        fetch(`https://${window.location.hostname}:3000/stores/1/search/${form[0].value}`)
          .then(res => res.json())
          .then(offers => {
            setOffers(offers)
          })
      }


    return (
        <header>
            
            <div className="header-bottom wrapper-padding-2 res-header-sm sticker header-sticky-3 furits-header">
                <div className="container-fluid">
                    <div className="header-bottom-wrapper">
                        <div className="logo-2 ptb-35">
                            <a href="/">
                                <img src="/img/logo1.png" alt=""/>
                            </a>
                        </div>
                        <div className="menu-style-2 handicraft-menu menu-hover">
                            <nav>
                                <ul>
                                    <li><a href="/">home</a></li>
                                    <li><a href="/stores" onClick={(e) => props.saveZipcode(null)}>all stores</a></li>
                                    <li><a href="/stores" onClick={(e) => props.openZipcodeModal()}>local stores</a></li>
                                    <li><a href="/cart">cart</a></li>
                                    <li><a href="/wishlist">wishlist</a></li>
                                </ul>
                            </nav>
                        </div>

                        
                        <div className="furits-login-cart">

                            <div className="furits-login">
                              { props.user ?
                                <ul>
                                    <li><a onClick={props.logout} href="/home">Logout</a></li>
                                </ul>
                               :
                                <ul>
                                    <li><a onClick={props.openLoginModal} href="#">Login</a></li>
                                    <li><a onClick={props.openRegisterModal} href="#">Reg</a></li>
                                </ul>
                              }


                            </div>




                            <CartDropdown/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mobile-menu-area handicraft-menu d-md-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none">
                            <div className="mobile-menu">
                                <nav id="mobile-menu-active">
                                    <ul className="menu-overflow">
                                    <li><a href="/">home</a></li>
                                    <li><a href="/stores" onClick={(e) => props.saveZipcode(null)}>all stores</a></li>
                                    <li><a href="/stores" onClick={(e) => props.openZipcodeModal()}>local stores</a></li>
                                    <li><a href="/cart">cart</a></li>
                                    <li><a href="/wishlist">wishlist</a></li>
                                    </ul>
                                </nav>							
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
        </header>
)

/*

  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
    <Flip left>
      <img alt="" src="/img/logo1.png" height="30" className="d-inline-block align-top"/>
      </Flip>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Stores</Nav.Link>
      <Nav.Link onClick={props.openZipcodeModal}>Change Area</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
    </Nav>

    { props.user ?  
       <div><Button variant="secondary" onClick={props.logout}>Logout</Button><Link to ="/deliveries"> <Button variant="secondary" >Deliveries</Button></Link></div>
    : <div><Button variant="secondary" onClick={props.openLoginModal}>Login</Button> <Button variant="secondary" onClick={props.openRegisterModal}>Register</Button> </div> }


  </Navbar> ) */

}


const mapStateToProps = state => {
   return {
      user: state.user
   };
};

const mapDispatchToProps = dispatch => {
   return {
      logout: (() => dispatch({type: 'LOGOUT'})),
      openSearchModal: ((store) => dispatch({type: 'OPEN_SEARCH_MODAL' , store: store})),
      closeSearchModal: (() => dispatch({type: 'CLOSE_SEARCH_MODAL'})),
      openLoginModal: (() => dispatch({type: 'OPEN_LOGIN_MODAL'})),
      closeLoginModal: (() => dispatch({type: 'CLOSE_LOGIN_MODAL'})),
      openRegisterModal: (() => dispatch({type: 'OPEN_REGISTER_MODAL'})),
      closeRegisterModal: (() => dispatch({type: 'CLOSE_REGISTER_MODAL'})),
      openZipcodeModal: (() => dispatch({type: 'OPEN_ZIPCODE_MODAL'})),
      closeZipcodeModal: (() => dispatch({type: 'CLOSE_ZIPCODE_MODAL'})),
      saveZipcode: (zipcode => dispatch({type: 'SAVE_ZIPCODE' , zipcode : zipcode})),
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(HeaderNavbar);

