import React from 'react';
import CovidUsDataCard from './CovidUsDataCard'
const CovidUsDataComplete=({data})=>{
    console.log(data[0].date);
    return(
    <div className = 'usDataComplete'>
    {data.map((info,i)=>{
        console.log(info)
        let date = new Date(data[i].dateChecked);
    return(
        <CovidUsDataCard
            key = {data[i].date}
            date = {date}
            deathIncrease = {data[i].deathIncrease}
            hospitalized = {data[i].hospitalized}
            hospitalizedCurrently = {data[i].hospitalizedCurrently}
            hospitalizedIncrease = {data[i].hospitalizedIncreas}
            inIcuCurrently = {data[i].inIcuCurrently}
        />
    )
    })}

    </div>
    )
}

export default CovidUsDataComplete;