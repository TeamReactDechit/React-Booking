import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../css/seatSearch.css";
import TimePicker from "react-bootstrap-time-picker";

const SeatSearch = ({handleChange, handleSubmit}) => (
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
            name="data"
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
          <Button className="btn submit-btn" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  </div>
);

export default SeatSearch;
