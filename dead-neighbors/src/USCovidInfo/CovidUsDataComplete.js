import React from 'react';
import CovidUsDataCard from './CovidUsDataCard'
const CovidUsDataComplete=({data})=>{
    return(
    <div className = 'usDataComplete'>
    {data.map((info,i)=>{
        let date = new Date(data[i].dateChecked);
    return(

        <CovidUsDataCard
            key = {i}
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