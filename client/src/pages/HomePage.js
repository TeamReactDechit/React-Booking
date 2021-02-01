import React from "react";
import ConCarousel from "../components/ConCarousel";
import SeatSearch from "../components/SeatSearch";


const HomePage = () => {
  return (
    <>
    <div className="container-fluid pt-4">
      <ConCarousel/>
    </div>
    <div className="container-fluid pt-2">
      <SeatSearch/>
    </div>
    </>
  );
};

export default HomePage;
