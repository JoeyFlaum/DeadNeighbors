import React from 'react';
import CovidStateDataCard from './CovidStateDataCard';


const CovidStateData = ({data}) => {
    if(data.length !== 0){
    return(
        <div>
            {data.map((stateObj,i)=>{ 
            return(
            <CovidStateDataCard
                key = {`${data[i].state}${[i]}`} 
                stateid = {data[i].state} 
                deaths = {data[i].death}
                date =  {data[i].date}
            />
            )})}
        </div>
    )
    }
    return null

}
export default CovidStateData;


