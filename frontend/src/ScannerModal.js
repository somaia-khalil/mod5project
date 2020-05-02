
import React, {useState, useEffect } from 'react';
import Quagga from "quagga";

import './scanner_styles.css'






import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';



const ScannerModal = (props) => {

  useEffect(() => {
    Quagga.init({
  "inputStream": {
    "type": "LiveStream",
    "constraints": {
      "width": { "min": "100%" },
      "height": { "min": "100%" },
      "facingMode": "environment"
    }
  },
  "locator": {
    "patchSize": "medium",
    "halfSample": true
  },
  "numOfWorkers": 2,
  "frequency": 10,
  "decoder": {
    "readers": ["ean_reader"]
  },
  "locate": true
}, err => {
      if (err) {
        console.log(err, "error msg");
      }
      Quagga.start();
      return () => {
        Quagga.stop()
      }
    });

    //detecting boxes on stream
    Quagga.onProcessed(result => {
      var drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute("width")),
            Number(drawingCanvas.getAttribute("height"))
          );
          result.boxes
            .filter(function(box) {
              return box !== result.box;
            })
            .forEach(function(box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "green",
                lineWidth: 2
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "#00F",
            lineWidth: 2
          });
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            { color: "red", lineWidth: 3 }
          );
        }
      }
    });

    Quagga.onDetected(detected);
  }, []);

  const detected = result => {
    props.closeScannerModal();
    props.onDetected(result.codeResult.code);
  };

   return (
      <Modal show={props.showScannerModal} onHide={props.closeScannerModal}>
        <Modal.Header closeButton>
          <Modal.Title>Scan Barcode</Modal.Title>
        </Modal.Header>
        <Modal.Body>

    <div id="interactive" className="viewport"/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeScannerModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
   )
}




const mapStateToProps = state => {
   return {
      cart: state.cart
   };
};

const mapDispatchToProps = dispatch => {
   return {
      saveToCart: (offer => dispatch({type: 'SAVE_TO_CART' , offer : offer}))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(ScannerModal);

