import { connect } from 'react-redux';
import React, {useState, useEffect } from 'react';
import { CardColumns } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OfferCard from './OfferCard';
import { Link } from "react-router-dom";
import Delivery from "./Delivery";



import { Accordion } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


import CategorySlider from './CategorySlider';

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
        //console.log(deliveries)
      })
     },[props.user])

//     return (
//       <React.Fragment>
//         <div className="container">
//          <p>All my deliveries:</p>
//           <table id="cart" className="table table-hover table-condensed">
//             <thead>
//               <tr>
//                 <th style={{ width: "50%" }}>Product</th>
//                 <th style={{ width: "10%" }}>Price</th>
//                 <th
//                   style={{
//                     width: "8 %"
//                   }}
//                 >
//                   Quantity
//                 </th>
//                 <th style={{ width: "22%" }} className="text-center">
//                   Subtotal
//                 </th>
//                 <th style={{ width: "10%" }} />
//               </tr>
//             </thead>
//             <tbody>
//               {deliveries.length === 0 ? (
//                 <div class="alert alert-danger large" role="alert">
//                   You don't have any product in your basket
//                 </div>
//               ) : 
//                   <div>{ deliveries.map(delivery => <Delivery delivery={delivery}/>) }</div>
              
//               }
//             </tbody>
//             <tfoot>
//               <tr>
//                 <td>
//                   <Link to="/products" className="btn btn-warning">
//                     <i className="fa fa-angle-left" /> Continue Shopping
//                   </Link>
//                 </td>
//                 <td colSpan="2" className="hidden-xs" />
//                 <td className="hidden-xs text-center">
//                   <strong>Total: </strong>
//                 </td>
//                 <td>
//                   <Link to="/products" className="btn btn-success btn-block">
//                     Checkout
//                     <i className="fa fa-angle-right" />
//                   </Link>
//                 </td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       </React.Fragment>
//     );
//   }


    return(

<Accordion>
{ deliveries.map(delivery => 
  <Card key ={delivery.id}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey={delivery.id}>
         {}

      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={delivery.id}>

      <Card.Body >
            <Delivery delivery={delivery}/>
     </Card.Body>
    </Accordion.Collapse>
  </Card>
)}

</Accordion>

    )
}


const mapStateToProps = state => {
   return {
      user: state.user,
      cart: state.cart
   };
};


const mapDispatchToProps = dispatch => {
   return {
      openLoginModal: (() => dispatch({type: 'OPEN_LOGIN_MODAL'})),
      closeLoginModal: (() => dispatch({type: 'CLOSE_LOGIN_MODAL'}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(Deliveries);





