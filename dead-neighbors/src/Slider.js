import React from "react";

const Slider = ({ boolean, usStateBoolean }) => {

  const slideStyleUS = { height: "33px", width: "103px" };
  const slideStyleState = { height: "33px", width: "125px" };
  return (
    <div className="slider" onClick={boolean}>
      <div
        className={usStateBoolean ? "slide" : "slide slideState"}
        style={usStateBoolean ? slideStyleUS : slideStyleState}
      ></div>
      <h4>US Info</h4>
      <h4>State Info</h4>
    </div>
  );
};

export default Slider;
