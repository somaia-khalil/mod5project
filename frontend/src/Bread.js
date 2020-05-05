import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const Bread = (props) =>  {


    // <Switch>
    // <Route path="/offers/:offer_id" render={routerProps => <OfferDetails {...routerProps}/>} ></Route>
    // <Route path="/stores/:store_id" render={routerProps => <StoreDetails {...routerProps}/>} ></Route>
    // <Route exact path="/stores"><StoreCards/></Route>
    // <Route exact path="/cart"><Cart/></Route>
    // <Route exact path="/"><Banner/></Route>
    // <Route exact path="/checkout"><Checkout/></Route>
    // <Route exact path="/deliveries"> <Deliveries/></Route>
    // </Switch>


console.log(props.order)


  return(
    <div className="breadcrumb-area pt-205 pb-210" style={{"background-image": "url(/img/bread.jpg)"}}>
    <div className="container">
        <div className="breadcrumb-content text-center">
            <Switch>
                <Route exact path="/checkout">
                    <h2>checkout</h2>
                        <ul>
                            <li><a href="/">home</a></li>
                            <li> checkout </li>
                        </ul>
                </Route>
                <Route exact path="/cart">
                    <h2>Cart</h2>
                        <ul>
                            <li><a href="/">home</a></li>
                            <li> Cart </li>
                        </ul>
                </Route>
                <Route exact path="/stores">
                    <h2>Stores</h2>
                        <ul>
                            <li><a href="/">home</a></li>
                            <li> All Stores</li>
                        </ul>
                </Route>
                <Route exact path="/stores/:store_id">
                    <h2>Store</h2>
                        <ul>
                            <li><a href="/">home</a></li>
                            <li><a href="/stores">All stores</a></li>
                            <li>{props.store?props.store.name: null}</li>
                        </ul>
                </Route>
                <Route  path="/stores/:store_id/categories/:category_id">
                    <h2>Category</h2>
                        <ul>
                            <li><a href="/">home</a></li>
                            <li><a href="/stores">All stores</a></li>
                            <li><a href={`/stores/${props.store?props.store.id: null}`}>{props.store?props.store.name: null}</a> </li>
                            <li> category</li>
                        </ul>
                </Route>
            </Switch>
        </div>
    </div>
    </div>
    
)



}



  

export default (Bread);




