import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreDetails from './StoreDetails'
import OfferDetails from './OfferDetails'
import StoreCategory from './StoreCategory'
import Stores from './Stores'

function Page() {

   
   /* {category.offers.map((offer)=> <Product  offer={offer}/>)}*/
   


    return (
        <div  id="center_column">
        <Router>
        <Switch>
        <Route  path="/stores/:id/categories/:categoryId" render={(routerProps) => <StoreCategory {...routerProps}/>} ></Route>
        <Route exact path="/stores/:id" render={(routerProps) => <StoreDetails {...routerProps}/>} ></Route>
        <Route exact path="/offers/:id" render={(routerProps) => <OfferDetails {...routerProps}/>} ></Route>
        <Route  path="/stores"><Stores/></Route>
        {/* <LoginForm/> */}
        {/* <SignupForm/> */}
      </Switch>
    </Router>
    </div>

     )}
export default Page