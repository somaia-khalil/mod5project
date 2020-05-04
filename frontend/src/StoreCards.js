import React, {  useState, useEffect } from 'react';
import { connect } from 'react-redux';



import LightSpeed from 'react-reveal/LightSpeed';



import { Link } from "react-router-dom";

import { CardColumns } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import StoreCard from './StoreCard';



const StoreCards = (props) => {

  const [stores, setStores] = useState([]);

    useEffect(() => {
        fetch(`https://${window.location.hostname}:3000/stores`)
          .then(res => res.json())
          .then(stores => {
           setStores(stores)
          })
      },[])

    return (




        <div className="blog-area pt-130 pb-70">
            <div className="container">
                <div className="section-title-furits text-center mb-95">
                    <img src="/assets/img/icon-img/49.png" alt=""/>
                    <h2>Stores</h2>
                </div>
                <div className="row">
                   { stores.filter(store => !props.zipcode || store.zip == props.zipcode).map( store => <StoreCard store={store}/> )}
                </div>
            </div>
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
