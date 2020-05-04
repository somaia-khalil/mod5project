import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



// import Cart from './Cart';

import HeaderNavbar from './HeaderNavbar';
import StoreCards from './StoreCards';
import StoreDetails from './StoreDetails';

// import Deliveries from './Deliveries';



import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import ZipcodeModal from './ZipcodeModal';
import SearchModal from './SearchModal';

import Cart from './Cart';

import OfferDetails from './OfferDetails';
import Banner from './Banner';


function App() {

   return (
         <Router>

            <HeaderNavbar/>

         <LoginModal/>
         <RegisterModal/>
         <ZipcodeModal/>
         <SearchModal/>

            <Switch>
               <Route path="/offers/:offer_id" render={routerProps => <OfferDetails {...routerProps}/>} ></Route>
               <Route path="/stores/:store_id" render={routerProps => <StoreDetails {...routerProps}/>} ></Route>
               <Route exact path="/stores"><StoreCards/></Route>
               <Route exact path="/cart"><Cart/></Route>
               <Route exact path="/"><Banner/></Route>
            </Switch>


         </Router>
)
/*


      <div className="App">
         <Router>

         <HeaderNavbar/>


            <Switch>
       //<Route  path="/stores/:id/categories/:categoryId" render={(routerProps) => <StoreCategory {...routerProps}/>} ></Route> 
               <Route path="/stores/:store_id" render={routerProps => <StoreDetails {...routerProps}/>} ></Route>
   //<Route exact path="/offers/:id" render={(routerProps) => <OfferDetails {...routerProps}/>} ></Route> 

               <Route exact path="/deliveries"><Deliveries/></Route>
               <Route exact path="/cart"><Cart/></Route>
               <Route exact path="/"><StoreCards/></Route>
            </Switch>
         </Router>
      </div>
   )
*/
}

export default App;
