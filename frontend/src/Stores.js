import React, {  useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";



const Stores = (props) => {

    useEffect(() => {
        fetch("http://localhost:3000/stores")
          .then(res => res.json())
          .then(stores => {
           props.saveStores(stores)
          })
      },[])


    return(
        <div>
         {props.stores.map((store)=> <p><Link to={`/stores/${store.id}`}>{store.name}</Link></p>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      stores: state.stores
    };
  };
   
  const mapDispatchToProps = dispatch => {
    return {
        saveStores: (stores) => dispatch({type:'SAVE_STORES',stores:stores })
     
    };
  };



export default connect(mapStateToProps,mapDispatchToProps)(Stores);