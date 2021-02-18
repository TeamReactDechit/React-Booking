import React from "react"; 
import "../css/checkout.css";
import { Row, Col } from "react-bootstrap";
import { Divider } from "react-native-elements";

const Checkout = () => {
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

export default Checkout;
