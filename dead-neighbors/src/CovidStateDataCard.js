import React from 'react';

const CovidStateDataCard = ({date,stateid,deaths})=>{
    return(
        <div className = 'stateDataCard' style = {{borderRadius: "10px",padding:'3px',margin:"1em", boxShadow:'0px 0px 5px #E63946'}}>
            <p>{date}</p>
            <p>{stateid}</p>
            <p>{deaths}</p>
        </div>
)
}

export default CovidStateDataCard;