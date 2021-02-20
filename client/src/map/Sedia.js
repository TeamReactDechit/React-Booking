import React, { useEffect, useState } from "react";

const Sedia = ({ id, coordinate, handleClick, selected}) => {
  const [focus, setFocus] = useState(false);
  const [enabled, setEnabled] = useState(false);


  useEffect(() => {debugger
    if(selected){
      if(selected.sedia_id == id){
        setEnabled(true);
      }else{
        setEnabled(false);
      }
    }
  }, [selected]);

  function handleFocus(e, id) {
    setFocus(true);
  }
  function handleBlur(e, id) {
    setFocus(false);
  }
  function handleSingleClick(e, id) {
    setEnabled(true);
  }

  return (
    <g
      id={id}
      onClick={(e) => {
        handleClick(e, id);
        
      }}
      onMouseLeave={(e) => handleBlur(e, id)}
      onMouseEnter={(e) => handleFocus(e, id)}
      className={[focus && "on", enabled && "active"]
        .filter((e) => !!e)
        .join(" ")}
    >
      {coordinate?.map((cord, index) => (
        <path key={index} d={cord} className="sedia" pointerEvents="all"></path>
      ))}
    </g>
  );
};

export default Sedia;
