import React from 'react';


const CovidStateData = ({data}) => {;
    if(data.length !== 0){
    return( 
        <h1> 
            {/* {console.log('stateData',data)} */}
            {`${data[0].state}`} 
            <br/>  
            {`${data[0].death} Deaths`}
        </h1>
    )
    }
    return null
}
export default CovidStateData;


