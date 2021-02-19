import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import MyTimePicker from "./MyTimePicker";

const Cart = ({ sedia, prenotations }) => {
  const [cart, setCart] = useState({ ...sedia });
  const [time, setTime] = useState();
  const [booking, setBooking] = useState();

  useEffect(() => {
    setCart({ ...sedia });
    if(sedia?.sedia_id){
      setBooking(prenotations.filter(p => p.seat_id == 1).map(h => h.hour));
    }
  }, [sedia]);


  return (
    <>
      <Col className="login">
        <Card>
          <Card.Body>
            <Card.Title>Riepilogo</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              seleziona l'orario
            </Card.Subtitle>
            <Card.Text></Card.Text>
            <Form>
            <Form.Group as={Row} controlId="stanza">
              <Form.Label column sm="3">
                Stanza numero
              </Form.Label>
              <Col>
                <Form.Control plaintext readOnly value="1" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="sedia">
              <Form.Label column sm="3">
                Sedia numero
              </Form.Label>
              <Col>
                <Form.Control plaintext readOnly value={cart?.sedia_id} />
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

export default Cart;
