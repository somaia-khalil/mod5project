import React, {  useEffect } from 'react';
import { connect } from 'react-redux';
import './storepic.css'


import { Link } from "react-router-dom";

import { CardColumns } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import StoreCard from './StoreCard';



const StoreCards = (props) => {

    useEffect(() => {
        fetch("http://localhost:3000/stores")
          .then(res => res.json())
          .then(stores => {
           props.saveStores(stores)
          })
      },[])




    return(
      <div>
       <div className="over">
        <div class="banner">
          <h1 className="header">Groceries Delivered in 90 Minute </h1>
          <span className="span">Get your healthy foods & snacks delivered at your doorsteps all day everyday</span>
          <div className="outer">
            <div className="inner">
              <span className="location">Location</span>
            </div>
          </div>
        </div>
      </div>
<Container>
       <CardColumns>
          { props.stores.filter(store => !props.zipcode || store.zip == props.zipcode).map( store => <StoreCard store={store}/> )}
       </CardColumns>
</Container>
</div>
    )
}

const mapStateToProps = state => {
    return {
      zipcode: state.zipcode,
      stores: state.stores
    };
  };
   
  const mapDispatchToProps = dispatch => {
    return {
        saveStores: (stores) => dispatch({type:'SAVE_STORES',stores:stores })
     
    };
  };



export default connect(mapStateToProps,mapDispatchToProps)(StoreCards);
