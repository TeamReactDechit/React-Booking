import React, { useState } from "react";
import Login from "../components/Login";
import Registration from "../components/Registration";
import "../css/LoginPage.css";
import { connect } from "react-redux";
import { loadLogin, saveNewUser } from "../redux/actions/usersActions";

const LoginPage = ({ loadLogin, saveNewUser, history }) => {
  const [utente, setUtente] = useState();
  const [errorsLogin, setErrorsLogin] = useState({});
  const [errorsSignUp, setErrorsSignUp] = useState({});


   /*LOGIN*/

  function validateLoginForm() {
    const { username, password } = utente;
    const errors = {};

    if (!username) errors.error = "Email is required.";
    if (!password) errors.error = "Password is required";

    setErrorsLogin(errors);
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

    loadLogin(utente)
      .then(() => {
        history.push("/dashboard");
      })
      .catch((error) => {
        setErrorsLogin({ error: error.message });
      });
  }


  /*REGISTRAZIONE*/

  function validateSignUpForm() {
    const { name, surname, birthdate, email, password, confirmpassword } = utente;
    const errors = {};

    if (!name) errors.error = "Name is required.";
    if (!surname) errors.error = "Surname is required";
    if (!birthdate) errors.error = "Date is required";
    if (!email) errors.error = "Email is required";
    if (!password) errors.error = "Password is required";
    if (!confirmpassword) errors.error = "Confirm password is required";
    if (confirmpassword !== password) errors.error = "Confirm password isn't equal to password";

    setErrorsSignUp(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSignUpSubmit(event) {
    event.preventDefault();

    if (!validateSignUpForm()) return;

    saveNewUser(utente)
      .then(() => {
        history.push("/dashboard");
      })
      .catch((error) => {
        setErrorsSignUp({ error: error.message });
      });
  }

  return (
    <div className="row mt-4">
      <div className="col-lg-6 col-12 float-start">
        <Login handleChange={handleChange} handleSubmit={handleLoginSubmit} errors={errorsLogin}/>
      </div>
      <div className="col-lg-6 col-12 float-end">
      <Registration handleChange={handleChange} handleSubmit={handleSignUpSubmit} errors={errorsSignUp}/>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.utente,
  };
}

const mapDispatchToProps = {
  loadLogin,
  saveNewUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
