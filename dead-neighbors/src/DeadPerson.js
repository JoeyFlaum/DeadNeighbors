import React from 'react';

const DeadPerson=()=>{
    return(
    <div style={{width:'60px', height:'70px'}}>
        <svg viewBox = '0 10 100 100'>
            <rect x='35' y='70' rx='10' ry='10' width='30' height='50' 
                style={{fill:'#e3d6b1',stroke:'#9f6255',strokewidth:'5',fillrule:'evenodd'}} />
            <circle cx = '50'  cy = '50' r='25'
                style={{fill:'#e3d6b1',stroke:'#9f6255',strokewidth:'5',fillrule:'evenodd'}} />
        </svg>
    </div>
    )
}

export default DeadPerson;