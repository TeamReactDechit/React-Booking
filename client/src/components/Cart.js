import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import MyTimePicker from "./MyTimePicker";
import { getSeat } from "../redux/actions/seatsActions";
import { connect } from "react-redux";

const Cart = ({ startDate, sedia, prenotations, getSeat, seats }) => {
  const [cart, setCart] = useState();
  const [time, setTime] = useState();
  const [booking, setBooking] = useState();

  useEffect(() => {
    
    if(sedia?.sedia_id){
      setBooking(prenotations.filter(p => p.seat_id == sedia?.sedia_id).map(h => h.hour));
      getSeat(sedia)
      .catch((error) => {
        console.log("errore-seats")
      });
    }
  }, [sedia]);


  return (
    <>
      <Col className="login">
        <Card>
          <Card.Body>
            <Card.Title>Prenotazione</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              conferma la prenotazione
            </Card.Subtitle>
            <Card.Text></Card.Text>
            <Form>
            <Form.Group as={Row} controlId="data">
              <Form.Label column sm="3">
                Data
              </Form.Label>
              <Col>
                <Form.Control plaintext readOnly value={startDate} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="stanza">
              <Form.Label column sm="3">
                Nome stanza
              </Form.Label>
              <Col>
                <Form.Control plaintext readOnly value={seats[0]?.Location.name} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="sedia">
              <Form.Label column sm="3">
                Sedia numero
              </Form.Label>
              <Col>
                <Form.Control plaintext readOnly value={seats[0]?.number} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="orario">
              <Form.Label column sm="3">
                Seleziona orario
              </Form.Label>
              <Col>
              <MyTimePicker start="08:00" end="19:00" step={60} range={booking}/>
              </Col>
            </Form.Group>
              
              </Form>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

function mapStateToProps(state) {
  return {
    prenotations: state.prenotations,
    seats: state.seats,
  };
}

const mapDispatchToProps = {
  getSeat,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);