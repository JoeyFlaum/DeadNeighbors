import React from "react";

const Slider = ({ boolean, usStateBoolean }) => {

  return (
    <div
      className="slider"
      onClick={boolean}
    >
      <div
        className={usStateBoolean?"slide slide-us":"slide slide-state"}
      ></div>
      <h4 >US Info</h4>
      <h4 >State Info</h4>
    </div>
  );
};

export default Slider;
