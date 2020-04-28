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
                          </div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
  );
}

export default App;
