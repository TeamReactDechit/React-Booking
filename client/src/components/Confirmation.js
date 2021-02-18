import React from "react";
import "../css/confirmation.css";
import { Row, Col, Button } from "react-bootstrap";
import { saveAs } from 'file-saver';
import axios from 'axios';

const Confirmation = () => {
    this.state = {
    name: 'Adrian',
    receiptId: 0,
    price1: 0,
    price2: 0,
}

this.createAndDownloadPdf = () => {
axios.post('/create-pdf', this.state)
.then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
.then((res) => {
const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
saveAs(pdfBlob, 'generatedDocument.pdf')
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
                                <p class="product-row">
                                    <span>Data:</span>
                                </p>
                                <p class="product-row timeslot">
                                    <span>Ora:</span>
                                </p>
                            </Col>
                        </Row>
                        <Row className ="details-row m-0">
                            <Col>
                                <p class="product-row">
                                    <span>Tiziano ferrino</span>
                                </p>
                                <p class="product-row">
                                    <span>tiziano.ferrino@gmail.com</span>
                                </p>
                            </Col>
                        </Row>
                        <Row className ="pdf-row">
                            <Col className ="px-0">
                                <Button onClick={this.createAndDownloadPdf} className="link-btn pdf-btn">
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
