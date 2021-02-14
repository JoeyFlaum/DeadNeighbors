import React from "react";

const CovidStateDataCard = ({ stateid, date,
    death,
    deathIncrease,
    positive,
    positiveIncrease,
    negative,
    negativeIncrease,}) => {
  return (
    <div className="stateDataCard">
      <h5>{stateid} Daily Covid Info</h5>
      <p><strong>Date:</strong> {date.toDateString()}</p>
      <p>
      <strong>Total {stateid} deaths:</strong> {death ? death.toLocaleString() : 0}
      </p>
      <p>
      <strong>Death Increase:</strong>{" "} {deathIncrease ? deathIncrease.toLocaleString() : 0} 
      </p>
      <p>
      <strong>Positve: </strong>{positive ? positive.toLocaleString() : 0}
      </p>
      <p>
        <strong>Positive Increase:</strong>
        {positiveIncrease ? positiveIncrease.toLocaleString() : 0}
      </p>
      <p>
      <strong>Negative: </strong>{negative ? negative.toLocaleString() : 0}
      </p>
      <p>
      <strong>Negative Increase:</strong>
        {negativeIncrease ? negativeIncrease.toLocaleString() : 0}
      </p>
      <p></p>
    </div>
  );
};

export default CovidStateDataCard;
