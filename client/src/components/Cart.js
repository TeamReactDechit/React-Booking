import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import MyTimePicker from "./MyTimePicker";
import { connect } from "react-redux";

const Cart = ({ prenotations, cart, handleSubmit, handleChange, validateForm }) => {

  
  const [booking, setBooking] = useState();

  useEffect(() => {
    if(cart){
      setBooking(prenotations.filter(p => p.seat_id == cart.Seat.id).map(h => h.hour));
    }
   
  }, [cart]);

  

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
            <Form onSubmit={handleSubmit}>

            <Form.Group as={Row} controlId="data">
              <Form.Label column sm="3">
                Data
              </Form.Label>
              <Col>
                <Form.Control type="date" plaintext readOnly value={cart?.date} name="date"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="stanza">
              <Form.Label column sm="3">
                Nome stanza
              </Form.Label>
              <Col>
                <Form.Control plaintext type="text" readOnly value={cart?.Seat.Location.name} name="name"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="sedia">
              <Form.Label column sm="3">
                Sedia numero
              </Form.Label>
              <Col>
                <Form.Control plaintext type="number" readOnly value={cart?.Seat.number} name="number"/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="orario">
              <Form.Label column sm="3">
                Seleziona orario
              </Form.Label>
              <Col>
              <MyTimePicker start="08:00" end="19:00" step={60} range={booking} handleChange={handleChange}/>
              </Col>
            </Form.Group>
              
              <Button className="mt-3 btn-dechit" size="lg" type="submit" >
                Conferma
              </Button>
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
    user: state.utente,
  };
}

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);