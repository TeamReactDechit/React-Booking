import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";
import MapSVG from "../map/MapSVG";
import { findAllLocattionsSeats } from "../redux/actions/locationsActions";
import { savePrenotations } from "../redux/actions/prenotationsActions";
import { connect } from "react-redux";
import { getSeat } from "../redux/actions/seatsActions";
const BookingPage = ({ history, location, prenotations, locations, seats, findAllLocattionsSeats, getSeat, savePrenotations}) => {
  const [startDate, setStartDate] = useState(location.state.startDate.date);
  const [cart, setCart] = useState();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if(!seats.length){
    findAllLocattionsSeats()
      .then(() => {
        console.log("ciaone");
      })
      .catch((error) => {});
    }
      debugger
        if(seats.length){
            setCart({
                ...cart,
                "user_id": 0,
                "Seat": seats[0],
                "date": startDate,
              });
        }
  }, [seats]);

  function handleSediaClick(event, id) {
    
    if(id!= ''){
        getSeat(id)
        .catch((error) => {
          console.log("errore-seats")
        });

    }
    
  }


  /* SHOPPING CART */

  function handleCartChange(event) {
    const { name, value } = event.target;
    setCart({
      ...cart,
      [name]: value,
    });
  }

  function handleCartSubmit(event) {
    event.preventDefault();
    debugger
//    if (!validateForm()) return;

    savePrenotations(cart)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        setErrors({ error: error.message });
      });
  }

  function validateForm() {
    debugger
    const { user_id, location_id, seat_id, date, hour } = cart;
    const errors = {};

    if (!user_id) errors.error = "user_id is required";
    if (!location_id) errors.error = "location_id is required";
    if (!seat_id) errors.error = "seat_id is required";
    if (!date) errors.error = "date is required";
    if (!hour) errors.error = "hour password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  return (
    <div className="row">
      <div className="col-12 mb-5 mt-3">
        <h1>Seleziona il posto</h1> 
      </div>
      <div className="col-6">
        <MapSVG handleClick={handleSediaClick} mappa={locations} sedia_selected={seats[0]?.id}/>
      </div>
      <div className="col-6">
          {cart?
        <Cart prenotations={prenotations} startDate={startDate} cart={cart} handleSubmit={handleCartSubmit} handleChange={handleCartChange} validateForm={validateForm}/>
          :
          <p>Seleziona un posto</p>
          }
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    prenotations: state.prenotations,
    locations: state.locations,
    seats:state.seats,
  };
}

const mapDispatchToProps = {
  findAllLocattionsSeats,
  savePrenotations,
  getSeat
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
