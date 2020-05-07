import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import Scanner from './Scanner';



const SearchModal = (props) => {
  let history = useHistory();

   const onDetected = barcode => {
    
     fetch(`https://${window.location.hostname}:3000/stores/${props.showSearchModal}/offers/search/${barcode}`)
          .then(res => res.json())
          .then(offer => {
            console.log(offer)
            
            if (offer){
            history.push(`/offers/${offer.id}`)
            props.closeSearchModal()}
          })
     };



   return props.showSearchModal ?
   (
  <div className="modal fade show" style={{"display" : "block" , "z-index" : "999999999"}} aria-modal="true">
    <div className="modal-dialog modal-xl" style={{"min-width" : "80vw"}}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Scan your product barcode</h4>
        </div>
        <div className="modal-body">
            <Scanner onDetected={onDetected}/>
        </div>
        <div className="modal-footer">
        <button type="button" className="default-btn floatleft" data-dismiss="modal" onClick={props.closeSearchModal}>Close</button>
        </div>
      </div>
    </div>
  </div>
)
:
(null)

}

const mapStateToProps = state => {
   return {
      user: state.user,
      showSearchModal: state.showSearchModal
   };
};

const mapDispatchToProps = dispatch => {
   return {
      login: (user => dispatch({type: 'LOGIN' , user: user})),
      openSearchModal: ((store) => dispatch({type: 'OPEN_SEARCH_MODAL', store})),
      closeSearchModal: (() => dispatch({type: 'CLOSE_SEARCH_MODAL'})),
      openErrorModal: ((message) => dispatch({type: 'OPEN_ERROR_MODAL', message})),
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchModal);
