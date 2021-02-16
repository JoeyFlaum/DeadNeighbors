import React from "react";
import CovidStateDataCard from "./CovidStateDataCard";

/* map API data to show different object keys for each state */
const CovidStateData = ({ data }) => {
  if (data.length !== 0) {
    return (
      <div className="stateDeaths">
        {data.map((stateObj, i) => {
          let day = new Date(data[i].dateChecked);
          return (/*mapped filtered or unfiltered and sorted or unsorted props to datacard */
            <CovidStateDataCard
              key={i}
              date={day}
              stateid={data[i].stateFullName}
              death={data[i].death}
              deathIncrease={data[i].deathIncrease}
              hospitalized={data[i].hospitalized}
              hospitalizedCurrently={data[i].hospitalizedCurrently}
              hospitalizedIncrease={data[i].hospitalizedIncrease}
              inIcuCurrently={data[i].inIcuCurrently}
              onVentilatorCurrently={data[i].onVentilatorCurrently}
              positive={data[i].positive}
              positiveIncrease={data[i].positiveIncrease}
              negative={data[i].negative}
              negativeIncrease={data[i].negativeIncrease}
            />
          );
        })}
      </div>
    );
  }
  return null;
};
export default CovidStateData;
