import React from "react";

const Slider = ({ boolean, usStateBoolean, sliderChange }) => {

  return (/*slider US or State Data */
    <div
      className="slider"
    >
      <h4>US Info</h4>
      <div className = "slide-track" onClick={boolean}  >{/* True / False to dataPage slideHandler function */}
      <div
        className={usStateBoolean?"slide slide-us":"slide slide-state"} /* change slide postion */
      />
      </div>
      <h4>State Info</h4>
    </div>
  );
};

export default Slider;
