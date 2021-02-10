import React from 'react';

const DeadPerson=({fillStroke})=>{
    return(
    <div className = 'person' style={{width:'25px', height:'30px'}}>
        <svg viewBox = '0 10 100 100'>
            <rect x='35' y='70' rx='10' ry='10' width='30' height='50' 
                style={{fill:fillStroke[0],stroke:fillStroke[1],strokewidth:'5'}} />
            <circle cx = '50'  cy = '50' r='25'
                style={{fill:fillStroke[0],stroke:fillStroke[1],strokewidth:'5'}} />
        </svg>
    </div>
    )
}

export default DeadPerson;