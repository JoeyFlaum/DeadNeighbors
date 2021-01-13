import React from 'react';

const CovidStateDataCard = ({date,stateid,deaths})=>{
    return(
        <div className = 'stateDataCard' >
            <p>{date}</p>
            <p>{stateid}</p>
            <p>{deaths}</p>
        </div>
)
}

export default CovidStateDataCard;