import React from 'react';

const CovidUsData = ({data}) => {
    if(data.length !== 0){
    return( 
         <h1> 
            {/* {console.log('Data',data)} */}
            {`Date Checked ${data[0].dateChecked}`} 
            <br/>  
            {`${data[0].death} Total US Deaths`}
            <br/>  
            {`${data[0].deathIncrease} Total US Death Increase`}
        </h1>
     )
    }return null
}
export default CovidUsData;