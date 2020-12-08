import React from 'react';


const CovidData = (info) => {
    const stateData = info;
    if(stateData.data.length !== 0){
    return( 
        <h1> 
            {console.log('stateData',stateData.data[37])}
            {`${stateData.data[37].state}`} 
            <br/>  
            {`${stateData.data[37].death} Deaths`}
        </h1>
    )
    }
    return null
}
export default CovidData;


