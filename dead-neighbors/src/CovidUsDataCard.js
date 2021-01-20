import React from "react";

const CovidUsDataCard = ({
  date,
  death,
  deathIncrease,
  positive,
  positiveIncrease,
  negative,
  negativeIncrease,
}) => {
  return (
    <div className="usDataCard">
      <h5>US Daily Info</h5>
      <p>Date: {date.toDateString()}</p>
      <p>
        Total US deaths: {death ? death.toLocaleString() : 0}
        <br /> That's {deathIncrease ? deathIncrease.toLocaleString() : 0} more
        deaths than the previous day.
      </p>
      <p>
        Positve: {positive ? positive.toLocaleString() : 0}
        <br />
        Positive Increase:{" "}
        {positiveIncrease ? positiveIncrease.toLocaleString() : 0}
      </p>
      <p>
        Negative: {negative ? negative.toLocaleString() : 0}
        <br /> Negative Increase:{" "}
        {negativeIncrease ? negativeIncrease.toLocaleString() : 0}
      </p>
      <p></p>
    </div>
  );
};

export default CovidUsDataCard;
