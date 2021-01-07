import React from 'react';

const CovidUsData = ({data}) => {
        let date = new Date(data[0].dateChecked);
        const usPopulation2020 = 331002651;
        const fractionUsDead = Math.round(usPopulation2020/(data[0].death));
        let weekday = ''
            switch(date.getDay()){
                case(0): weekday = 'Sunday';break;
                case(1): weekday = 'Monday';break;
                case(2): weekday = 'Tuesday';break;
                case(3): weekday = 'Wednesday';break;
                case(4): weekday = 'Thursday';break;
                case(5): weekday = 'Friday';break;
                case(6): weekday = 'Saturday';break;
                default:break;
            }
    return( 
         <div>  
            {`On ${weekday}, ${date.toDateString().slice(3)}, the US death toll reached ${data[0].death} deaths. `}
            {`That's 1 in ${fractionUsDead} dead from Covid-19.`}
        </div>
     )
}
export default CovidUsData;