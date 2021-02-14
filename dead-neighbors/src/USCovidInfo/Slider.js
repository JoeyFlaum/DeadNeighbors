import React from "react";

const Slider = ({ boolean, usStateBoolean }) => {

  return (
    <div
      className="slider"
    >
      <h4>US Info</h4>
      <div className = "slide-track" onClick={boolean}>
      <div
        className={usStateBoolean?"slide slide-us":"slide slide-state"}
      />
      </div>
      <h4>State Info</h4>
    </div>
  );
};

export default Slider;
