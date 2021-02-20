import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";
import MapSVG from "../map/MapSVG";
import { findAllLocattionsSeats } from "../redux/actions/locationsActions";
import { connect } from "react-redux";

const BookingPage = ({ prenotations, locations, findAllLocattionsSeats }) => {
  const [sedia, setSedia] = useState();

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
        <MapSVG handleClick={handleClick} mappa={locations}/>
      </div>
      <div className="col-6">
        <Cart sedia={sedia} prenotations={prenotations} />
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
