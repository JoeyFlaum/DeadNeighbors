import React from 'react';
import CovidStateDataCard from './CovidStateDataCard';

/* map API data to show different object keys for each state */
const CovidStateData = ({data, listOfStates}) => {
    if(data.length !== 0){
    return(
        <div>
            {data.map((stateObj,i)=>{ 
            
            return(
                <CovidStateDataCard
                    key = {`${data[i].state}${[i]}`} 
                    stateid = {data[i].stateFullName} 
                    deaths = {`${data[i].death} Deaths`}
                    date =  {`Last Update ${data[i].lastUpdateEt} EST`}
                />
            )})}
        </div>
    )
    }
    return null

}
export default CovidStateData;


