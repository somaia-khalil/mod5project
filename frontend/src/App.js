import React from 'react';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm';
import StoreCards from './StoreCards'
import StoreDetails from './StoreDetails'
import OfferDetails from './OfferDetails'
import HeaderNavbar from './HeaderNavbar';
import Sidebar from './Sidebar'

import CategorySlider from './CategorySlider';



import Header from './HeaderNavbar';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">


      <HeaderNavbar/>
      {/*  <Sidebar/>*/}
      <Router>
         <Switch>
         { /*<Route  path="/stores/:id/categories/:categoryId" render={(routerProps) => <StoreCategory {...routerProps}/>} ></Route> */}
         <Route exact path="/stores/:id" render={(routerProps) => <StoreDetails {...routerProps}/>} ></Route>
         <Route exact path="/offers/:id" render={(routerProps) => <OfferDetails {...routerProps}/>} ></Route>
         <Route  path="/"><StoreCards/></Route>
         {/* <LoginForm/> */}
         {/* <SignupForm/> */}
         </Switch>
      </Router>
  </div>
  );
}

export default App;
