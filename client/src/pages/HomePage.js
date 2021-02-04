import React from "react";
import ConCarousel from "../components/ConCarousel";
import SeatSearch from "../components/SeatSearch";

const HomePage = () => {
  return (
    <div className="row">
      <div className="col-12 px-0 pt-4">
        <ConCarousel />
      </div>
      <div className="col-12 px-0 pt-2">
        <SeatSearch />
      </div>
    </div>
  );
};

export default HomePage;
