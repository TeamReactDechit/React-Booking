import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Registration = ({handleChange, handleSubmit, errors }) => {

  return (
    <div className="container">
      <h1>Registration</h1>
      <Form className="col-md-8 col-12 login p-4" onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="surname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            name="surname"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="birthdate">
          <Form.Label>Birtdate</Form.Label>
          <Form.Control
            type="date"
            name="birthdate"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="confirmpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmpassword"
            onChange={handleChange}
          />
        </Form.Group>
        {errors.error && <div className="alert alert-danger"><h2>RICORDATI CHE MORIRAI!</h2><span>{errors.error}</span></div>}
        
        <Button className="btn-dechit mt-3" size="lg" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Registration;