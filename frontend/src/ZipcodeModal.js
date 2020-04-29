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
      props.saveZipcode(form[1].value)
      props.closeZipcodeModal()
    }

   return (
  <Modal show={props.showZipcodeModal} onHide={props.closeZipcodeModal}>
      <Form onSubmit={setZipcode}>
        <Modal.Header closeButton>
          <Modal.Title>Locate Stores</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <Form.Group controlId="formBasicZipcode">
         <Form.Label>Zipcode 07054 or 14207 </Form.Label>
       <Form.Control type="zipcode" placeholder="Enter zipcode"/>
       </Form.Group>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {props.closeZipcodeModal() ; props.saveZipcode(null)}}>
            All Stores
          </Button>
          <Button type="submit" variant="primary">
            Find
          </Button>
        </Modal.Footer>
       </Form>
     </Modal>
   )
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


