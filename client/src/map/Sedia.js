import React, { useState } from "react";

const Sedia = ({ id, coordinate, handleClick }) => {
  const [focus, setFocus] = useState(false);
  
  function handleFocus(e ,id){
    setFocus(true);
  }
  function handleBlur(e ,id){
    setFocus(false);
  }
  
  return (
    <g id={id} 
    onClick={((e) => handleClick(e, id))} 
    onMouseLeave={((e) => handleBlur(e, id))} 
    onMouseEnter={((e) => handleFocus(e, id))} 
    className={focus?'on':''}>
      {coordinate?.map((cord, index) => (
        <path
        key={index}
          d={cord}
          className="sedia"
          pointerEvents="all"
        ></path>
      ))}
    </g>
  );
  
};

export default Sedia;
