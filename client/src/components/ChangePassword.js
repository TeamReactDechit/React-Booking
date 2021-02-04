import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const ChangePassword = () => {

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
  }

  function validateForm() {
    console.log('validation started!')
    }

    return(
      <div className="content-dashboard p-4">
      <h1>Cambia password</h1>
      <Form className="col-md-8 col-12 login p-4" onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="newpassword">
          <Form.Label>Nuova Password</Form.Label>
          <Form.Control
            type="password"
            name="newpassword"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="confirmnewpassword">
          <Form.Label>Conferma Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmnewpassword"
            onChange={handleChange}
          />
        </Form.Group>
        <Button className="mt-3 btn-dechit" size="lg" type="submit" disabled={!validateForm}>
          Cambia Password
        </Button>
      </Form>
    </div>
      );
}
export default ChangePassword;