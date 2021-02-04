import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { loadLogin } from "../redux/actions/usersActions";
import { connect } from "react-redux";

const Login = ({loadLogin, history }) => {
  const [user, setUser] = useState();
  const [errors, setErrors] = useState({});

  function validateForm() {
    const { username, password } = user;
    const errors = {};

    if (!username) errors.username = "Email is required.";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    loadLogin(user)
      .then(() => {
        history.push('/dashboard');
      })
      .catch(error => {
        setErrors({ onSave: error.message });
      });
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <Form className="col-md-8 col-12 login p-4" onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="username"
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
        <Button className="mt-3 btn-dechit" size="lg" type="submit" disabled={!validateForm}>
          Login
        </Button>
      </Form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = {
  loadLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
