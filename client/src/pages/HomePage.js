import React, { useState } from "react";
import ConCarousel from "../components/ConCarousel";
import SeatSearch from "../components/SeatSearch";
import { connect } from "react-redux";
import { findAllPrenotations } from "../redux/actions/prenotationsActions";

const HomePage = ({findAllPrenotations, history}) => {
  const [startDate, setStartDate] = useState();
  const [, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setStartDate({
      ...startDate,
      [name]: value,
    });
  }

  function validateDataForm() {
    const { date } = startDate;
    const errors = {};

    if (!date) errors.error = "Data is required.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleDataSubmit(event) {
    event.preventDefault();

    if (!validateDataForm()) return;
    findAllPrenotations(startDate)
    .then(() => {
      history.push({
      pathname: "/booking",
      state: { startDate }
    });
    })
    .catch((error) => {
      setErrors({ error: error.message });
    });
  }

  return (
    <div className="row home-page">
    <h1 class="home-title mt-3">Benvenuto nel Dechit Booking system</h1>
      <div className="col-12 px-0 pt-4">
        <ConCarousel />
      </div>
      <div className="col-12 px-0 pt-2">
        <SeatSearch
          handleChange={handleChange}
          handleSubmit={handleDataSubmit}
          validateForm={validateDataForm}
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    prenotations: state.prenotations,
  };
}

const mapDispatchToProps = {
  findAllPrenotations,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);