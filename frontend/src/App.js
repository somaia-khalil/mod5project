import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm';
import Stores from './Stores'
import StoreDetails from './StoreDetails'
import OfferDetails from './OfferDetails'
import StoreCategory from './StoreCategory'
import Header from './Header'
import Sidebar from './Sidebar'
import Page from './Page'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <div>
            <div class="container">
                <div class="inner_container">
                    <div class="inner_container_sub">
                        <div class="row">
                           <Sidebar/>
                           <Page/>
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
                        </div>
                    </div>
                </div>
            </div>
  </div>
  );
}

export default App;
