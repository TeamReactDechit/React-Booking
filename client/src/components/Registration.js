import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Registration</h1>
      <Form className="col-md-8 col-12 login p-4" onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="surname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="birthdate">
          <Form.Label>Birtdate</Form.Label>
          <Form.Control
            autoFocus
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
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
        <Button className="btn-dechit mt-3" size="lg" type="submit" disabled={!validateForm()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Registration;