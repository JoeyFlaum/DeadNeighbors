import React from 'react';

const CovidStateDataCard = ({date,stateid,deaths})=>{
    return(
        <div>
            <h1>{date}</h1>
            <h1>{stateid}</h1>
            <h1>{deaths}</h1>
        </div>
)
}

export default CovidStateDataCard;