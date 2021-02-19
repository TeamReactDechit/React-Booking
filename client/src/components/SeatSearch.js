import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../css/seatSearch.css";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SeatSearch = ({handleChange, handleSubmit, validateForm}) => {

  return (
  <div className="search-wrapper">
    <Form onSubmit={handleSubmit}>
      <Row className="form-row justify-content-center">
        <Col md="2">
          <Form.Label className="seat-label mt-2">Seleziona la tua data:</Form.Label>
        </Col>
        <Col md="3">
          <Form.Control
            type="date"
            className="search-date"
            name="date"
            placeholder=""
            onChange={handleChange}
            min = {new Date().toISOString().split('T')[0]}
          />
        </Col>
        <Col md="2">
          {validateForm&&<Button className="btn submit-btn w-100" type="submit">
            Trova orari <span class="pl-2">
            <FontAwesomeIcon className="me-2 fa-lg" icon={faArrowRight} />
          </span>
          </Button>}
        </Col>
      </Row>
    </Form>
  </div>
  )
  }

export default SeatSearch;
