import React from 'react';

const CovidUsData = ({data}) => {
    if(data.length !== 0){
    return( 
         <h2>  
            {`Date Checked ${data[0].dateChecked}`} 
            <br/>  
            {`${data[0].death} Total US Deaths`}
            <br/>  
            {`${data[0].deathIncrease} Total US Death Increase`}
        </h2>
     )
    }return null
}
export default CovidUsData;