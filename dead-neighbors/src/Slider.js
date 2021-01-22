import React from "react";

const Slider = ({ boolean, usStateBoolean }) => {
  const textStyle = { margin: "0", alignSelf: "center", animation: "roll 3s" };
  const wrapperStyleUs = {
    transition:".5s",
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
    transition:"5s",
    position:"relative",
    display: "flex",
    flexWrap: "none",
    justifyContent: "space-around",
    width: "250px",
    height: "45px",
    borderRadius: "50px",
    flexDirection: "row",
  };

  const slideStyleUS = { height: "33px", width: "103px" };
  const slideStyleState = { height: "33px", width: "125px" };
  return (
    <div
      className="slider"
      onClick={boolean}
      style={wrapperStyleState}
    >
      <div
        className={usStateBoolean?"slide":"slide slideState"}
        style={usStateBoolean?slideStyleUS:slideStyleState}
      ></div>
      <h4 style={textStyle}>US Info</h4>
      <h4 style={textStyle}>State Info</h4>
    </div>
  );
};

export default Slider;
