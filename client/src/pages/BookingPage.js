import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";
import MapSVG from "../map/MapSVG";
import { findAllLocattionsSeats } from "../redux/actions/locationsActions";
import { connect } from "react-redux";

const BookingPage = ({ location, prenotations, locations, findAllLocattionsSeats }) => {
  const [sedia, setSedia] = useState();
  const [startDate, setStartDate] = useState(location.state.startDate.date);
  useEffect(() => {
    findAllLocattionsSeats()
      .then(() => {
        console.log("ciaone");
      })
      .catch((error) => {});
  }, []);

  function handleClick(event, id) {
    setSedia({ sedia_id: id });
  }

  return (
    <div className="row">
      <div className="col-12 mb-5 mt-3">
        <h1>Seleziona il posto</h1> 
      </div>
      <div className="col-6">
        <MapSVG handleClick={handleClick} mappa={locations} sedia_selected={sedia}/>
      </div>
      <div className="col-6">
          {sedia?.sedia_id&&
        <Cart sedia={sedia} prenotations={prenotations} startDate={startDate}/>
          }
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    prenotations: state.prenotations,
    locations: state.locations,
  };
}

const mapDispatchToProps = {
  findAllLocattionsSeats,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
