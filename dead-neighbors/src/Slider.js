import React from "react";

const Slider = ({ boolean, usStateBoolean }) => {
  const textStyle = { margin: "0", alignSelf: "center", animation: "roll 3s" };
  const wrapperStyleUs = {
    transform: "rotate(360deg)",
    display: "flex",
    flexWrap: "none",
    justifyContent: "space-around",
    width: "250px",
    height: "45px",
    border: "1px solid #c3c3c3",
    borderRadius: "50px",
    flexDirection: "row",
  };
  const wrapperStyleState = {
    transform: "rotate(-360deg)",
    display: "flex",
    flexWrap: "none",
    justifyContent: "space-around",
    width: "250px",
    height: "45px",
    border: "1px solid #c3c3c3",
    borderRadius: "50px",
    flexDirection: "row",
  };
  const usData = "US Info";
  const stateData = "State Info";
  const slideStyleUS = { height: "33px", width: "103px" };
  const slideStyleState = { height: "33px", width: "125px" };
  return (
    <div
      className="slider"
      onClick={boolean}
      style={usStateBoolean ? wrapperStyleUs : wrapperStyleState}
    >
      <div
        className="slide"
        style={usStateBoolean ? slideStyleUS : slideStyleState}
      ></div>
      <h4 style={textStyle}>{usStateBoolean ? usData : stateData}</h4>
      <h4 style={textStyle}>{!usStateBoolean ? usData : stateData}</h4>
    </div>
  );
};

export default Slider;
