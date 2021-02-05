import React, { useState } from "react";
import "../css/checkout.css";
import {Row, Col, Form, Button, Nav, Modal} from "react-bootstrap";

const CheckoutPage = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
    <div class="container checkout">
      <h1>Riepilogo prenotazione</h1>
      <Form onSubmit={handleSubmit} className="row">
        <Col class="col-7">
            <div className="login p-4">
            <Form.Group size="lg" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="surname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="birthdate">
                <Form.Label>Birtdate</Form.Label>
                <Form.Control
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="confirmpassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
            </div>
            <Row className="pt-2">
              <Form.Group controlId="formBasicCheckbox" className="col-1">
                <Form.Check type="checkbox"/>
              </Form.Group>
              <Nav.Link href="#link" className="col-7 p-0 mx-0 terms-checkbox" 
              onClick={() => setShow(true)}>Ho letto e accetto i termini e condizioni.</Nav.Link>
            </Row>
        </Col>
        <Col clasName="col-3">
          <div class="container checkout-cart pt-3">
              <h1 class="mt-0">Dechit Booking System</h1>
              <Row className ="details-row time">
                  <Col>
                    <Row class="pt-3">
                      <p class="product-row col-2">
                          <span>Data:</span>
                      </p>
                      <div class="col-2 details-data">
                        <p>01/09/1995</p>
                      </div>
                    </Row>
                    <Row>
                      <p class="product-row col-2">
                          <span>Ora:</span>
                      </p>
                      <div class="col-4 details-data">
                        <p>10.00AM - 11.00AM</p>
                      </div>
                    </Row>
                  </Col>
              </Row>
              <Row className ="details-row location">
                  <div class="col-2">
                      <span>Aula:</span>
                  </div>
                  <div class="col-2 details-data">
                      <p>Alfa</p>
                  </div>
                  <div class="col-2">
                      <span>posto:</span>
                  </div>
                  <div class="col-2 details-data">
                      <p>36</p>
                  </div>
              </Row>
              <Row className ="details-row total mx-0">
                  <div class="col total-title px-0">
                      <p>Totale</p>
                  </div>
                  <div class="col-2 details-data px-0 total-amount">
                      <p>2 EUR</p>
                  </div>
              </Row>
          </div>
          <Row>
            <Col>
              <Button className="btn-dechit mt-3 float-left w-100" size="lg" type="cancel">
                indietro
              </Button>
            </Col>
            <Col>
              <Button className="btn-dechit mt-3 float-right w-100" size="lg" type="submit" disabled={!validateForm()}>
                Procedi al pagamento
              </Button>
            </Col>
          </Row>
        </Col>
      </Form>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </div>
    </>
  );
}

export default CheckoutPage;
