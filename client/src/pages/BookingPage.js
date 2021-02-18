import React from "react";
import Cart from "../components/Cart";
import MapSVG from "../map/MapSVG";
import { connect } from "react-redux";

const BookingPage = ({prenotations}) =>{
    
    return (
        <div className="row">
            <div className="col-12 mb-5 mt-3">
                <h1>Seleziona il posto</h1>
            </div>
            <div className="col-6">
                <MapSVG/>
            </div>
            <div className="col-6">
                <Cart/>
            </div>
        </div>
      );
}

function mapStateToProps(state) {
    return {
        prenotations: state.prenotations,
    };
  }
  
  const mapDispatchToProps = {
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
  