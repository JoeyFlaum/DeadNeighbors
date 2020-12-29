import React from 'react';
import DeadPerson from './DeadPerson'

class DeadPeople extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            people:''
        }
    }
    render(){
        return(
            <div style ={{display:'flex',flexDirection:'row', flexWrap:'wrap'}}>
            <DeadPerson/>
            </div>
        );
 
    }
}


export default DeadPeople;