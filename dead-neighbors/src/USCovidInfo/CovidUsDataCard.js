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
  return (/*layout of individual US data card using props sent */
    <div className="usDataCard">
      <h5>US Daily Covid Info</h5>
      <p><strong>Date:</strong>{" "} {date.toDateString()}</p>
      <p>
        <strong>Total US deaths:</strong> {" "} {death ? death.toLocaleString() : 0}
      </p>
      <p>  
      <strong>Death Increase:</strong>{" "} {deathIncrease ? deathIncrease.toLocaleString() : 0}
      </p>
      <p>
        <strong>Positve:</strong>{" "} {positive ? positive.toLocaleString() : 0}
      </p>
      <p>
        <strong>Positive Increase:</strong>{" "}
        {positiveIncrease ? positiveIncrease.toLocaleString() : 0}
      </p>
      <p>
        <strong>Negative:</strong>{" "} {negative ? negative.toLocaleString() : 0}
      </p>
      <p>
      <strong>Negative Increase: </strong>{" "}
        {negativeIncrease ? negativeIncrease.toLocaleString() : 0}
      </p>
    </div>
  );
};

export default CovidUsDataCard;
