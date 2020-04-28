import React, {  useEffect } from 'react';
import { connect } from 'react-redux';
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
<Container>
       <CardColumns>
          {new Array(20).fill(props.stores.map( store => <StoreCard store={store}/> )).flat() }
       </CardColumns>
</Container>
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



export default connect(mapStateToProps,mapDispatchToProps)(StoreCards);