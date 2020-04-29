import React from 'react';
import { connect } from 'react-redux';

import {  useState, useEffect } from 'react';

import { CardColumns } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OfferCard from './OfferCard';


function Deliveries(props) {

   const [deliveries, setDeliveries] = useState([]);

   useEffect(() => {
      if (!props.user) {
         props.openLoginModal()
          // TODO display some fancy error message to require login
         return
      }

      fetch("http://localhost:3000/deliveries",{
        method: 'GET',
        headers:{"Authorization": `Bearer ${props.user.token}`}
      })
      .then(res => res.json())
      .then(deliveries => {
        setDeliveries(deliveries)
        console.log(deliveries)
      })
     },[props.user])


    return (
<Container>
        <p>All my deliveries:</p>
       <CardColumns>
          { deliveries.map(order => <p> {order.id} </p>) }
       </CardColumns>
</Container> )


}


const mapStateToProps = state => {
   return {
      user: state.user
   };
};

const mapDispatchToProps = dispatch => {
   return {
      openLoginModal: (() => dispatch({type: 'OPEN_LOGIN_MODAL'})),
      closeLoginModal: (() => dispatch({type: 'CLOSE_LOGIN_MODAL'}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(Deliveries);


