import React from 'react';

const Slider = ({boolean,usStateBoolean})=>{
const textStyle= {margin:'0',alignSelf:'center', animation:'roll 3s'}
const wrapperStyle ={transform:'rotate(360deg)',display:"flex", flexWrap:'none', justifyContent:'space-around',width:'250px',height:'40px', border: '1px solid #c3c3c3', borderRadius:'50px',flexDirection:'row'}
const wrapperStyleC ={transform:'rotate(0deg)',display:"flex", flexWrap:'none', justifyContent:'space-around',width:'250px',height:'40px', border: '1px solid #c3c3c3', borderRadius:'50px',flexDirection:'row'}
const usData = 'US DATA'
const stateData = 'STATE DATA'
return(
    <div onClick = {boolean} style = {usStateBoolean? wrapperStyle:wrapperStyleC}>
        <h4 style = {textStyle}>{usStateBoolean?usData:stateData}</h4>
        <h4 style = {textStyle}>{!usStateBoolean?usData:stateData}</h4>
    </div>
)
}

export default Slider;