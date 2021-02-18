import React from "react";
import "../css/confirmation.css";
import { Row, Col, Button } from "react-bootstrap";
import { saveAs } from 'file-saver';
import axios from 'axios';
import initialState  from "../redux/reducers/initialState";


const Confirmation = () => {
    const json = {
    name: 'Adrian',
    receiptId: 0,
    price1: 0,
    price2: 0,
}

const createAndDownloadPdf = () => {
    axios.post(initialState.baseurl + '/create-pdf', json)
      .then(() => axios.get(initialState.baseurl + '/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'pdf_invoice.pdf');
      })
  }

    return (
        <>
        <div className = "container confirmation">
            <h2 className="title">Grazie! Prenotazione avvenuta con successo.</h2>
            <div className="container resume">
                <Row>
                    <div className="container-fluid p-0">
                        <h2>Riepilogo prenotazione</h2>
                        <Row className ="details-row m-0">
                            <Col>
                                <p className="product-row">
                                    <span>Data:</span>
                                </p>
                                <p className="product-row timeslot">
                                    <span>Ora:</span>
                                </p>
                            </Col>
                        </Row>
                        <Row className ="details-row m-0">
                            <Col>
                                <p className="product-row">
                                    <span>Tiziano ferrino</span>
                                </p>
                                <p className="product-row">
                                    <span>tiziano.ferrino@gmail.com</span>
                                </p>
                            </Col>
                        </Row>
                        <Row className ="pdf-row">
                            <Col className ="px-0">
                                <Button onClick={createAndDownloadPdf} className="link-btn pdf-btn">
                                    SCARICA LA TUA PRENOTAZIONE
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </div>
        </div>
        </>
    );
}

export default Confirmation;
