import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../css/seatSearch.css";

const SeatSearch = ({handleChange, handleSubmit, validateForm}) => {

  return (
  <div className="search-wrapper">
    <Form onSubmit={handleSubmit}>
      <Row className="form-row pb-0">
        <Col md="3">
          <Form.Label className="seat-label">Data</Form.Label>
        </Col>
      </Row>
      <Row className="form-row">
        <Col md="3">
          <Form.Control
            type="date"
            className="search-date"
            name="date"
            placeholder=""
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row className="form-row">
        <Col md="3">
          <Button className="btn cancel-btn" type="reset">
            Cancel
          </Button>
          
          {validateForm&&<Button className="btn submit-btn" type="submit">
            Submit
          </Button>}
        </Col>
      </Row>
    </Form>
  </div>
  )
  }

export default SeatSearch;
