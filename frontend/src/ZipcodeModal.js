import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';



const ZipcodeModal = (props) => {

   const setZipcode = (e) => {
      let form = e.target
      e.preventDefault()
      props.saveZipcode(form[0].value)
      props.closeZipcodeModal()
    }


   return props.showZipcodeModal ?
   (
  <div className="modal fade show" style={{"display" : "block" , "z-index" : "999999999"}} aria-modal="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Search by Area</h4>
        </div>
        <div className="modal-body login-form-container">


                                    <form onSubmit={setZipcode}>
                                        <input name="zipcode" placeholder="Zipcode" type="zipcode"/>
                                        <div className="button-box">
                                            <button type="submit" className="default-btn floatright">Find</button>
                                            <button type="button" className="default-btn floatleft" data-dismiss="modal" onClick={props.closeZipcodeModal}>Close</button>
                                        </div>
                                    </form>

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
      zipcode: state.zipcode,
      showZipcodeModal: state.showZipcodeModal
   };
};

const mapDispatchToProps = dispatch => {
   return {
      saveZipcode: (zipcode => dispatch({type: 'SAVE_ZIPCODE' , zipcode : zipcode})),
      openZipcodeModal: (() => dispatch({type: 'OPEN_ZIPCODE_MODAL'})),
      closeZipcodeModal: (() => dispatch({type: 'CLOSE_ZIPCODE_MODAL'}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(ZipcodeModal);


