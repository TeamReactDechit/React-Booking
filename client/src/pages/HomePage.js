import React, { useState } from "react";
import ConCarousel from "../components/ConCarousel";
import SeatSearch from "../components/SeatSearch";

const HomePage = () => {
  const [data, setData] = useState();

  function handleChange(event) {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleDataSubmit(event) {
    event.preventDefault();

    if (!validateLoginForm()) return;

    loadLogin(utente)
      .then(() => {
        history.push("/dashboard");
      })
      .catch((error) => {
        setErrorsLogin({ error: error.message });
      });
  }

  return (
    <div className="row">
      <div className="col-12 px-0 pt-4">
        <ConCarousel />
      </div>
      <div className="col-12 px-0 pt-2">
        <SeatSearch handleChange={handleChange} handleSubmit={handleDataSubmit}/>
      </div>
    </div>
  );
};

export default HomePage;
