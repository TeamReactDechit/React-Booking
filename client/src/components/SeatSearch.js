import React from "react";
import { Form, Row, Col, Button} from 'react-bootstrap';
import "../css/seatSearch.css";
import TimePicker from 'react-bootstrap-time-picker';

const SeatSearch = () => (
        <div className = "search-wrapper">
            <Form>
                <Row className="form-row pb-0">
                    <Col>
                        <Form.Label className="form-label">Data</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label className= "form-label">Slot orario</Form.Label>
                    </Col>
                </Row>
                <Row className="form-row">
                    <Col>
                        <Form.Control type="date" className="search-date" name="dob" placeholder="" />
                    </Col>
                    <Col>
                        <TimePicker start="10:00" end="21:00" step={60}/>
                    </Col>
                </Row>
                <Button className = "btn cancel-btn" type="reset">
                    Cancel
                </Button>
                <Button className = "btn submit-btn" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
);

export default SeatSearch;
  