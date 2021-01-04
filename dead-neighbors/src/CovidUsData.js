import React from 'react';

const CovidUsData = ({data}) => {
    if(data.length !== 0){
        let date = new Date(data[0].dateChecked);
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let weekday = date.getDay();

    return( 
         <div>  
            {`On ${weekday},${month}/${day}/${year}, the US death toll reach ${data[0].death} deaths.`} 
            {`This is a ${data[0].deathIncrease} death increase from the day prior.`}
        </div>
     )
    }return null
}
export default CovidUsData;