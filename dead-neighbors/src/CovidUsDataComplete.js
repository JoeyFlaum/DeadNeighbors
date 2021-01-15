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
            death = {data[i].death}
            deathIncrease = {data[i].deathIncrease}
            hospitalized = {data[i].hospitalized}
            hospitalizedCurrently = {data[i].hospitalizedCurrently}
            hospitalizedIncrease = {data[i].hospitalizedIncrease}
            inIcuCurrently = {data[i].inIcuCurrently}
            onVentilatorCurrently = {data[i].onVentilatorCurrently}
            positive = {data[i].positive}
            positiveIncrease = {data[i].positiveIncrease}
            negative = {data[i].negative}
            negativeIncrease = {data[i].negativeIncrease}
            
            
        />
    )
    })}

    </div>
    )
}

export default CovidUsDataComplete;