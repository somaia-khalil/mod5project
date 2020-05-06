import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

import Scanner from './Scanner';



const ErrorModal = (props) => {

  

   return props.showErrorModal ?
   (
  <div className="modal fade show" style={{"display" : "block" , "z-index" : "999999999"}} aria-modal="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Error</h4>
        </div>
        <div className="modal-body">
         <p>{props.showErrorModal}</p>
        </div>
        <div className="modal-footer">
        <button type="button" className="default-btn floatleft" data-dismiss="modal" onClick={props.closeErrorModal}>Close</button>
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
      showErrorModal: state.showErrorModal
   };
};

const mapDispatchToProps = dispatch => {
   return {
      openErrorModal: ((message) => dispatch({type: 'OPEN_ERROR_MODAL', message: message})),
      closeErrorModal: (() => dispatch({type: 'CLOSE_ERROR_MODAL'}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(ErrorModal);
