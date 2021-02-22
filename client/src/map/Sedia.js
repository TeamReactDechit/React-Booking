import React, { useEffect, useState } from "react";
import { OverlayTrigger, Popover, Tooltip } from "react-bootstrap";
const Sedia = ({ sedia, room, coordinate, handleClick, selected }) => {
  const [focus, setFocus] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (selected) {
      if (selected == sedia.id) {
        setEnabled(true);
      } else {
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
  const renderTooltip = (id,props) => (
    <Tooltip id="button-tooltip" {...props}>
      <p className="m-0">Stanza {room.name}</p>
      <p className="m-0">Sedia n. {sedia.number}</p>
    </Tooltip>
  );

  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip(sedia, room)}
      >
        <g
          id={sedia.id}
          onClick={(e) => {
            handleClick(e, sedia.id);
          }}
          onMouseLeave={(e) => handleBlur(e, sedia.id)}
          onMouseEnter={(e) => handleFocus(e, sedia.id)}
          className={[focus && "on", enabled && "active"]
            .filter((e) => !!e)
            .join(" ")}
        >
          {coordinate?.map((cord, index) => (
            <path
              key={index}
              d={cord}
              className="sedia"
              pointerEvents="all"
            ></path>
          ))}
        </g>
      </OverlayTrigger>
    </>
  );
};

export default Sedia;
