import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";
import MapSVG from "../map/MapSVG";
import { connect } from "react-redux";

const BookingPage = ({prenotations}) =>{
    const [sedia, setSedia] = useState();
    const [prenotazioni, setPrenotazioni] = useState();

    


      
    function handleClick( event, id ) {
        setSedia({"sedia_id":id});
      }

    return (
        <div className="row">
            <div className="col-12 mb-5 mt-3">
                <h1>Seleziona il posto</h1>
            </div>
            <div className="col-6">
                <MapSVG handleClick={handleClick}/>
            </div>
            <div className="col-6">
                <Cart sedia={sedia} prenotations={prenotations}/>
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
  