import React from "react";
import ConCarousel from "../components/ConCarousel";
import SeatSearch from "../components/SeatSearch";

const HomePage = () => {
  return (
    <div className="row">
      <div className="col-12 px-0">
        <ConCarousel />
      </div>
      <div className="col-12 px-0">
        <SeatSearch />
      </div>
    </div>
  );
};

export default HomePage;
