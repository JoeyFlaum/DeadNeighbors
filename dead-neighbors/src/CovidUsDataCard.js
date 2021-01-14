import React from 'react';

const CovidUsDataCard = ({date, deathIncrease,hospitalized,hospitalizedCurrently, hospitalizedIncrease, inIcuCurrently})=>{

    return(
        <div className = 'usDataCard' >
            <p>{date.toDateString().slice(3)}</p>
            <p>{ deathIncrease}</p>
            <p>{hospitalized}</p>
            <p>{hospitalizedCurrently}</p>
            <p>{hospitalizedIncrease}</p>
            <p>{inIcuCurrently}</p>
        </div>
)
}

export default CovidUsDataCard;

