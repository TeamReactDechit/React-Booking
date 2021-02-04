import React from "react";
import { Link } from 'react-router-dom';
import "../css/confirmation.css";
import { Row, Col } from "react-bootstrap";

const Confirmation = () => {
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
                                <Link to="/" className="link-btn pdf-btn">
                                    SCARICA LA TUA PRENOTAZIONE
                                </Link>
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
