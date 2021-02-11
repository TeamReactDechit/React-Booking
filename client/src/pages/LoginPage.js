import React, { useState } from "react";
import Login from "../components/Login";
import Registration from "../components/Registration";
import "../css/LoginPage.css";
import { connect } from "react-redux";
import { loadLogin } from "../redux/actions/usersActions";

const LoginPage = ({ loadLogin, history }) => {
  const [utente, setUtente] = useState();
  const [errors, setErrors] = useState({});

  function validateForm() {
    const { username, password } = utente;
    const errors = {};

    if (!username) errors.username = "Email is required.";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUtente({
      ...utente,
      [name]: value,
    });
  }

  function handleLoginSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    loadLogin(utente)
      .then(() => {
        debugger;
        history.push("/dashboard");
      })
      .catch((error) => {
        setErrors({ onSave: error.message });
      });
  }

  return (
    <div className="row mt-4">
      <div className="col-lg-6 col-12 float-start">
        <Login handleChange={handleChange} validateForm={validateForm} handleSubmit={handleLoginSubmit}/>
      </div>
      <div className="col-lg-6 col-12 float-end">
        <Registration />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    utente: state.utente,
  };
}

const mapDispatchToProps = {
  loadLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
