import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreDetails from './StoreDetails'
import OfferDetails from './OfferDetails'
import StoreCategory from './StoreCategory'

function Page() {



    return (
        <div  id="center_column">




        {/* <!-- Display Category Path here --> */}
        <div className="breadcrumb clearfix"> <a className="home" href="/"><i className="icon-home"></i></a> <span className="navigation-pipe">&gt;</span> <span className="navigation_page">Category</span></div>


        {/* <!-- Category Heading and Title --> */}
        <h1 className="page-heading product-listing"><span className="cat-name">Category</span><span className="heading-counter">There are %Length products.</span></h1>

   



        <Router>
        <Switch>
        <Route  path="/stores/:id/categories/:categoryId" render={(routerProps) => <StoreCategory {...routerProps}/>} ></Route>
        <Route exact path="/stores/:id" render={(routerProps) => <StoreDetails {...routerProps}/>} ></Route>
        <Route exact path="/offers/:id" render={(routerProps) => <OfferDetails {...routerProps}/>} ></Route>
        <Route  path="/"><Stores/></Route>
        {/* <LoginForm/> */}
        {/* <SignupForm/> */}
      </Switch>
    </Router>
    </div>

     )}
export default Page
